const express = require('express');
const handle_patch_req = require('../controller/handle_patch_req');


const patchRouter = express.Router();

// patchRouter.use('/:id', handle_patch_req);
patchRouter.get('/', (req, res) => {
   return res.render("updateForm");
});

patchRouter.post('/submit', handle_patch_req);
module.exports = patchRouter;