const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clientes',
        required: true
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true
    },
    valorProduto: {
        type: Number,
        required: true
    },
    vendas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendas',
    }
    
});

const pedidoModel = mongoose.model('pedidos', pedidoSchema);

module.exports = pedidoModel;
