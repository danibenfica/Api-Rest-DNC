const mongoose = require('mongoose');
require('dotenv').config();

let conn;

const connection = () => {
    if(conn) {
        return conn;
    }

    conn = mongoose.connect(process.env.MONGO_URI);
}

module.exports = connection;
