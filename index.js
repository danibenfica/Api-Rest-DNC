const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clienteRoute.js');
const produtosRoutes = require('./routes/produtoRoute.js');
const pedidosRoutes = require('./routes/pedidoRoute.js');
const vendasRoutes = require('./routes/vendaRoute.js');
const estoqueRoute = require('./routes/estoqueRoute.js')

app.use(express.json());
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/vendas', vendasRoutes);
app.use ('/estoque', estoqueRoute)

app.listen(8080, () => {
  console.log(`Servidor conectado!`);
});
