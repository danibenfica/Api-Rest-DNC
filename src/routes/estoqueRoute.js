const express = require('express');
const router = express.Router();
const produtosModel = require('../src/model/produtos.js');

router.get('/', async (_, res) => {
    try {
        const estoque = await produtosModel.find({}, 'nome quantidadeDisponivel');
        return res.status(200).json({ data: estoque });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
