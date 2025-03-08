const mongoose = require('mongoose');

async function connect_mongoDB(url) {
    await mongoose.connect(url)
        .then(console.log('mongoDB is connected '))
        .catch((error) => {
            console.log('mongoDB connection is failed error: ', error);
        });
};

module.exports = connect_mongoDB;