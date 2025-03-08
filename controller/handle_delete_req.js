const { json } = require('express');
const URL = require('../model/model_Schema');

const handle_delete_req =async (req, res) => {
    const user = await URL.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'user not exist' });
    return res.status(200).json({ msg: 'delete successfully ', user, });
};

module.exports = handle_delete_req;