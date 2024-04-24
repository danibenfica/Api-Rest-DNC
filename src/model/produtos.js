const mongoose = require('mongoose');
const conn = require('../config/mongo.js');

conn(); 

const produtoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    quantidadeDisponivel:  {
        type: Number,
        required: true,
        default: 0 
    },
        valor: {
        type: Number,
        required: true,
        default: 0
        }

    
})

const produtoModel = mongoose.model('produtos', produtoSchema); 


module.exports = produtoModel;
