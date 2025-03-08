const URL = require('../model/model_Schema');
const mongoose = require('mongoose');


const handle_patch_req = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
        console.error("Invalid ObjectId:", req.body.id);
        return res.send(` invelid user id : ${req.body.id}`);
    }
    const user = await URL.findById(req.body.id);
    if (!user) return res.status(404).json({ msg: ' user not exist' });
    user.redirectedID = req.body.redirectedURL;
    return res.status(200).render("update",{ user, num:1});
}


module.exports = handle_patch_req;