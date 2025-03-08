const express = require("express");
const connect_mongoDB = require("./controller/connect_mongoDB");
const getRouter = require("./routers/get_route");
const postRouter = require("./routers/post_router");
const patchRouter = require("./routers/patch_router");
const deleteRouter = require("./routers/delete_router");
const path = require("path");
const URL = require('./model/model_Schema');
const { handle_analysis_req } = require('./controller/handle_analysis_req');
const dotenv = require('dotenv')


// configuring the environment variables
dotenv.config();

// create server
const app = express();
const PORT = 8000;
app.listen(PORT, () => {
    console.log("server is listen at port no : ", PORT);
});


// setting the templeting engine
app.set("view engine", "ejs");

// setting the view directory 
app.set("views", path.join(__dirname, "views"));

// egnore favicon 
app.use((req, res, next) => {
    if (req.path === '/favicon.ico') {
        return res.status(204).end(); // No Content response
    }
    next();
});


// parse json data
app.use(express.json());

// parse urlencoded data
app.use(express.urlencoded({ extended: true }));


//connect to mongoDB
connect_mongoDB(process.env.MONGO_URI);

//routers
app.use('/update', patchRouter);
app.get('/Analysis', (req, res) => {
  return res.render('analysis');
});


app.use('/analysis/submit', handle_analysis_req);
app.post('/submit', postRouter);
app.get('/', getRouter);
// app.delete('/:id', deleteRouter);
 
app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
      {
        shortID,
      },
      {
        $push: {
          visitHistory: {
            timeStamps: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectedID);
  });