const URL = require('../model/model_Schema');

const handle_analysisAll_req = async (req, res) => {
    const user = await URL.find();
    if (!user) return res.status(404).send('database is empty');
    return res.render("analysisView",{user, num:1});
}

const handle_analysis_req = async (req, res) => {
    if (!req.body.shortID) return handle_analysisAll_req(req, res);
    const user = await URL.find({ shortID: req.body.shortID });
    if (!user) return res.status(400).send(`shortID does not exist shortID: ${req.body.shortID}`);
    return res.render("analysisView",{user, num:1});
};

module.exports = {handle_analysis_req, handle_analysisAll_req};

