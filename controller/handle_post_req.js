const mongoose = require("mongoose");
const URL = require("../model/model_Schema");
const { nanoid } = require("nanoid");

const handle_post_req = async (req, res) => {
  const body = req.body;
  const user = await URL.findOne({ redirectedID: body.redirectingURL });
  if (user)
    return res.send(` redirecting url is already exist  shortID: ${user.shortID}`);

  if (!body.redirectingURL) return res.send(" redirected url is required ");

  const shortID = nanoid(8);

  await URL.create({
    shortID: shortID,
    redirectedID: body.redirectingURL,
    visitHistory: [],
  });

  return res.status(201).send(` shortID: ${shortID}`);
};

module.exports = handle_post_req;
