const URL = require('../model/model_Schema');

const handle_get_req = async (req, res) => {
    // const user = await URL.find();
    // if (user.length === 0) return res.status(404).json({ msg: "database has no data or empty" });
    // return res.status(200).json(user);
    return res.render('home');
};

// const handle_get_req_by_id = async (req, res) => {
//     const user = await URL.findById(req.params.id);
//     if (!user) return res.status(404).json({ msg: " user does not exist " });
//     return res.staus(200).json(user);
// }

module.exports = {handle_get_req };