const express = require('express');
const { handle_get_req, handle_get_req_by_id } = require('../controller/handle_get_request');
 

const getRouter = express.Router();

getRouter.get('/', handle_get_req);
// getRouter.get('/:id', handle_get_req_by_id);
 

module.exports = getRouter;