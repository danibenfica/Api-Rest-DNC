const express = require('express');
const router = express.Router();
const clientesModel = require('../model/clientes.js');
const pedidosModel = require('../model/pedidos.js');


router.get('/', async (_, res) => {
    try {
        const clientes = await clientesModel.find({});
        return res.status(200).json({ data: clientes });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await clientesModel.findById(id);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
            return res.status(200).json({ data: cliente });
        } catch (error) {
                return res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoCliente = await clientesModel.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email
});
        return res.status(201).json({ data: novoCliente });
        } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
        const { id } = req.params;

    try {
        const cliente = await clientesModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado!' });
    }
        return res.status(200).json({ data: cliente });
        } catch (error) {
            return res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await clientesModel.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado!' });
        }

        await cliente.remove();

        const pedidos = await pedidosModel.find({ cliente: id });
        for (const pedido of pedidos) {
            const produto = await produtosModel.findById(pedido.produto);
            if (produto) {
            produto.quantidadeDisponivel += 1;
            await produto.save();
            }
        }

        return res.status(200).json({ message: 'Cliente excluído com sucesso!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



module.exports = router;
