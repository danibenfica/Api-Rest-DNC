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
    valor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true
    },
    vendas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendas',
        required: true
    }
    
});

const pedidoModel = mongoose.model('pedidos', pedidoSchema);

module.exports = pedidoModel;
