const mongoose = require('mongoose')

let conn

const connection = () => {
    if(conn) {
        return conn
    }

    //caso utilize usuario e senha no seu banco, não esqueça de adicionar!

    conn = mongoose.connect('mongodb://127.0.0.1:27017/local')
}

module.exports = connection