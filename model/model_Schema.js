const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true,
    },
    redirectedID: {
        type: String,
        reauired: true,
        unique: true,
    },
    visitHistory: [{
        timeStamps: {
            type: Number,
        },
    }],
}, { timestamps: true, });

const URL = mongoose.model("url", urlSchema);

module.exports = URL;