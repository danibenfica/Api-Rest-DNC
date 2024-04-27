const express = require('express');
const router = express.Router();
const vendasModel = require('../model/vendas.js');


router.get('/', async (_, res) => {
    try {
        const vendas = await vendasModel.find({}).populate('cliente', 'nome').select('cliente valorTotal');
        return res.status(200).json({ data: vendas });
        } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

  module.exports = router