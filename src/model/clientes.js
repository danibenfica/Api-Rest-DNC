const mongoose = require('mongoose');
const conn = require('../config/mongo.js');

conn(); 

const clienteSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        unique: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    }

    
})

const clientesModel = mongoose.model('clientes', clienteSchema); 


module.exports = clientesModel;
