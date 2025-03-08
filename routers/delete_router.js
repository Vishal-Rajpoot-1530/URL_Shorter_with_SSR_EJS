const express = require('express');
const handle_delete_req = require('../controller/handle_delete_req')

const deleteRouter = express.Router();

deleteRouter.delete('/:id', handle_delete_req);

module.exports = deleteRouter;