const express = require('express');
const router = express.Router();
const vendasModel = require('../model/vendas.js');
const pedidosModel = require('../model/pedidos.js');


router.get('/', async (_, res) => {
    try {
        const vendas = await vendasModel.find({}).populate('cliente', 'nome').select('cliente valorTotal');
        return res.status(200).json({ data: vendas });
        } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

async function realizarPedido(clienteId, produtoId) {
    try {
        const produto = await produtosModel.findById(produtoId);
        if (!produto || produto.quantidadeDisponivel <= 0) {
            throw new Error('Produto não disponível no estoque!');
    }

        const pedido = new pedidosModel({
            cliente: clienteId,
            produto: produtoId,
            valorProduto: produto.valor
        });
        await pedido.save();

        produto.quantidadeDisponivel -= 1;
        await produto.save();
    
        return pedido;
        } catch (error) {
        console.error('Erro ao realizar pedido:', error.message);
        throw error;
        }
    }

async function registrarVenda(clienteId) {
    try {
        const pedidos = await pedidosModel.find({ cliente: clienteId }).populate('vendas').populate('produto');

        let valorTotal = 0;

    for (const pedido of pedidos) {
            if (pedido.produto) {
                if (typeof pedido.valorProduto !== 'number' || typeof pedido.produto.quantidadeDisponivel !== 'number') {
                    throw new Error('valorProduto ou quantidadeDisponivel não é um número!');
                }
            
                const valorProdutoTotal = pedido.valorProduto * pedido.produto.quantidadeDisponivel;
            
                valorTotal += pedido.valorProduto;
            }
            }
        

    const novaVenda = new vendasModel({
        cliente: clienteId,
        valorTotal: valorTotal
    });

        await novaVenda.save();
    
        return novaVenda;
        } catch (error) {
        console.error('Erro ao registrar venda:', error.message);
        throw error;
        }
    }


module.exports = router;
