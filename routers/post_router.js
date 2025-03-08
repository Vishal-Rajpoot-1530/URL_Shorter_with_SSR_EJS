const express = require('express');
const handle_post_req = require('../controller/handle_post_req');

const postRouter = express.Router();

postRouter.post('/submit',handle_post_req);

 
module.exports = postRouter;