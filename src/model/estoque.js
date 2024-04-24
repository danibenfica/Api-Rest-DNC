const mongoose = require('mongoose');

const estoqueSchema =  mongoose.Schema({
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true
    },
    quantidadeDisponivel: {
        type: Number,
        required: true,
        default: 0
    }
});

const estoqueModel = mongoose.model('estoque', estoqueSchema);

module.exports = estoqueModel;
