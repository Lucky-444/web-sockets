const dotenv = require('dotenv');
dotenv.config();


module.exports = {
        DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase',
        PORT: process.env.PORT || 3000,
}