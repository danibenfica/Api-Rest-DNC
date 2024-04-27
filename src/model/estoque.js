const mongoose = require('mongoose');

const estoqueSchema =  mongoose.Schema({
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true
    },
    quantidadeDisponivel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        required: true,
    }
});

const estoqueModel = mongoose.model('estoque', estoqueSchema);

module.exports = estoqueModel;
