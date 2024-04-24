const mongoose = require('mongoose');

const vendaSchema = mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clientes',
        required: true
    },
    valorTotal: {
        type: Number,
        required: true,
        default: 0
    }
});

const vendasModel = mongoose.model('vendas', vendaSchema);

module.exports = vendasModel;
