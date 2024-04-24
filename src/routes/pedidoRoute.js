const express = require('express');
const router = express.Router();
const pedidosModel = require('../model/pedidos.js');
const produtosModel = require('../model/produtos.js');


router.get('/', async (_, res) => {
    try {
        const pedidos = await pedidosModel.find({}).populate('cliente').populate('produto');
        return res.status(200).json({ data: pedidos });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const pedido = await pedidosModel.findById(id).populate('cliente').populate('produto');
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado!' });
        }
    
        return res.status(200).json({ data: pedido });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
});


router.post('/', async (req, res) => {
    const { clienteId, produtoId } = req.body;

    try {
        const pedido = await realizarPedido(clienteId, produtoId);

        await registrarVenda(clienteId);

        return res.status(201).json({ data: pedido });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { produtoId } = req.body;
        try {
        const pedido = await pedidosModel.findById(id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado!' });
        }
    
        const produtoOriginal = await produtosModel.findById(pedido.produto);
        if (!produtoOriginal) {
            return res.status(404).json({ message: 'Produto original do pedido não encontrado!' });
        }
    
        const novoProduto = await produtosModel.findById(produtoId);
        if (!novoProduto) {
            return res.status(404).json({ message: 'Novo produto não encontrado!' });
        }
    
        produtoOriginal.quantidadeDisponivel += 1;
        await produtoOriginal.save();
    
        pedido.produto = produtoId;
        pedido.valorProduto = novoProduto.valor;
        await pedido.save();
    
        novoProduto.quantidadeDisponivel -= 1;
        await novoProduto.save();
    
        return res.status(200).json({ message: 'Pedido atualizado com sucesso!' });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const pedido = await pedidosModel.findById(id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado!' });
        }
    
        const produto = await produtosModel.findById(pedido.produto);
        if (!produto) {
            return res.status(404).json({ message: 'Produto do pedido não encontrado!' });
        }
    
        produto.quantidadeDisponivel += 1;
        await produto.save();
    
        await pedido.remove();
    
        return res.status(200).json({ message: 'Pedido cancelado com sucesso!' });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
});


module.exports = router;

