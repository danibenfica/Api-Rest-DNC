const express = require('express');
const router = express.Router();
const produtosModel = require('../src/model/produtos.js');

router.get('/', async (_, res) => {
    try {
        const produtos = await produtosModel.find({});
        return res.status(200).json({ data: produtos });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const produto = await produtosModel.findById(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado!' });
        }

        return res.status(200).json({ data: produto });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    
        const response = await produtosModel.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            quantidadeDisponivel: req.body.quantidadeDisponivel,
            valor: req.body.valor
    
        })
    
        return res.status(200).json({
            data: response
        })
    })
    
router.put('/:id', async (req, res) => {
        const { id } = req.params;
        
        try {
            const produto = await produtosModel.findById(id);
            if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado!' });
            }
        
            produto.nome = req.body.nome;
            produto.descricao = req.body.descricao;
            produto.quantidadeDisponivel = req.body.quantidadeDisponivel;
            produto.valor = req.body.valor;
        
            await produto.save();
        
        
            return res.status(200).json({ data: produto });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        });

    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
    
            try {
                const produto = await produtosModel.findById(id);
                if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado!' });
                }
            
                await produto.remove();
            
            
                return res.status(200).json({ message: 'Produto excluído com sucesso!' });
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
    });

module.exports = router;
