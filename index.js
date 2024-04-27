const express = require('express');
const app = express();
const clientesRoutes = require('./src/routes/clienteRoute.js');
const produtosRoutes = require('./src/routes/produtoRoute.js');
const pedidosRoutes = require('./src/routes/pedidoRoute.js');
const vendaRoute = require ('./src/routes/vendaRoute.js');
const estoqueRoute = require('./src/routes/estoqueRoute.js')

app.use(express.json());
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes); 
app.use('/vendas', vendaRoute);
app.use ('/estoque', estoqueRoute)

app.listen(8080, () => {
    console.log(`Servidor conectado!`);
});
