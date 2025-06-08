const mongoose  = require('mongoose');
const { DB_URL } = require('./server-config'); 
const connection = async() => {
        await mongoose.connect(DB_URL)
}

module.exports = connection;
