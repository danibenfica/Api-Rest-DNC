![Captura de tela 2024-04-27 202234](https://github.com/danibenfica/Api-Rest-DNC/assets/103818625/0140465b-de9c-4e18-88f5-2d990e080b7d)

---
# Api-Rest-Produtos

Esta aplicação serve como um sistema de gerenciamento abrangente para negócios que lidam com vendas e estoque de produtos. Ela foi projetada para registrar e gerenciar clientes, produtos, pedidos e vendas, proporcionando uma administração eficiente desses aspectos fundamentais de um negócio comercial. É projetada para administrar clientes, produtos, pedidos, vendas e estoque. Ela disponibiliza uma API RESTful para realizar operações CRUD (Criar, Ler, Atualizar e Excluir) em cada um desses recursos.

## Funcionalidades Principais

A aplicação oferece as seguintes funcionalidades:

### Clientes

- **Listagem de Clientes**: Retorna todos os clientes cadastrados.
- **Consulta de Cliente por ID**: Retorna os detalhes de um cliente específico.
- **Cadastro de Novo Cliente**: Cria um novo registro de cliente.
- **Atualização de Cliente**: Atualiza os dados de um cliente existente.
- **Exclusão de Cliente**: Remove um cliente do sistema.

### Produtos

- **Listagem de Produtos**: Retorna todos os produtos cadastrados.
- **Cadastro de Novo Produto**: Cria um novo registro de produto.
- **Atualização de Produto**: Atualiza os dados de um produto existente.
- **Exclusão de Produto**: Remove um produto do sistema.

### Pedidos

- **Listagem de Pedidos**: Retorna todos os pedidos registrados.
- **Consulta de Pedido por ID**: Retorna os detalhes de um pedido específico.
- **Criação de Novo Pedido**: Permite realizar um novo pedido associado a um cliente e produto.
- **Atualização de Pedido**: Atualiza o produto associado a um pedido existente.
- **Cancelamento de Pedido**: Cancela um pedido e atualiza o estoque correspondente.

### Vendas

- **Listagem de Vendas**: Retorna todas as vendas realizadas.
- **Consulta de Venda por ID**: Retorna os detalhes de uma venda específica.

### Estoque

- **Consulta de Estoque**: Retorna o estoque atual de todos os produtos.

## Arquitetura da Aplicação

A aplicação segue uma arquitetura MVC (Model-View-Controller), onde:

- **Model (Modelo)**: Define os esquemas e modelos MongoDB para cada entidade (cliente, produto, pedido, venda, estoque).
- **Rotas (Routes)**: Define as rotas HTTP que correspondem às diferentes operações disponíveis para cada recurso.

## Como Executar

Para executar esta aplicação localmente, siga os passos abaixo:

### Requisitos

- Node.js instalado na sua máquina.
- MongoDB configurado e em execução localmente ou em uma URL remota.

### Clonar o Repositório

```bash
git clone https://github.com/danibenfica/Api-Rest-DNC.git
cd Api-Rest-DNC
```

### Instalar Dependências

```bash
yarn install
```

### Configuração do Banco de Dados

## Criação do arquivo .env

1. Na raiz do seu projeto, crie um arquivo chamado `.env`.
2. Neste arquivo, você deve definir a variável `MONGO_URI` com a URI do seu banco de dados MongoDB Atlas. A URI deve seguir o seguinte formato:

```bash
MONGO_URI=mongodb+srv://seuUsuario:suaSenha@seuBancodeDados.mongodb.net/?retryWrites=true&w=majority&appName=seuBancodeDados
```

Substitua `seuUsuario`, `suaSenha` e `seuBancodeDados` pelas informações correspondentes do seu banco de dados no MongoDB Atlas.

## Criação de um banco de dados no MongoDB Atlas

1. Faça login na sua conta do MongoDB Atlas.
2. Vá para a seção "Clusters" e clique no botão "Connect" do cluster que você deseja usar.
3. Selecione a opção "Connect your application".
4. Copie a string de conexão fornecida. Ela deve ser semelhante à string `MONGO_URI` mencionada acima.
5. Substitua `<username>`, `<password>` e `<dbname>` na string de conexão pelas suas informações correspondentes.
6. Cole essa string de conexão como valor para `MONGO_URI` no seu arquivo `.env`.

### Iniciar o Servidor

```bash
yarn start
```

A aplicação estará disponível em `http://localhost:8080`. Você pode acessar as diferentes rotas definidas para interagir com os recursos da aplicação.

## Modelo de Dados

Os modelos dados para clientes, estoque, pedidos, produtos e vendas são definidos na pasta `models` do projeto. A pasta possui os arquivos: `clientes.js`, `estoque.js`, `pedidos.js`, `produtos.js` e `vendas.js`.

### Modelo de clientes:

- `nome` (String): Nome do cliente.
- `telefone` (String/Unique): Telefone do cliente.
- `email` (String/Unique): E-mail do cliente.

### Modelo de estoque:

- `produtoId` (mongoose.Schema.Types.ObjectId/FK): Mostra o nome do produto, referenciando o nome que aparece no modelo de produto.
- `quantidadeDisponivel` (mongoose.Schema.Types.ObjectId/FK): Mostra a quantidade disponível do produto, referenciando a quantidade que aparece no modelo de produto.

### Modelo de pedidos:

- `clienteId` (mongoose.Schema.Types.ObjectId/FK): Referencia os dados do cliente que fez o pedido no modelo de clientes.
- `produtoId` (mongoose.Schema.Types.ObjectId/FK): Referencia o produto que o cliente pediu contido no modelo de pedidos.
- `valorProduto` (Number/default: 0): Valor do produto escolhido pelo cliente.
- `vendaId` (mongoose.Schema.Types.ObjectId/FK): Referencia o total de pedidos que o cliente fez, contido no modelo de vendas.

### Modelo de produtos:

- `nome` (String/NotNull): Nome do produto.
- `descricao` (String): Descrição do produto.
- `quantidadeDisponivel` (Number/default: 0): Quantidade disponível do produto no estoque.
- `valor` (Number): Valor do produto.

### Modelo de vendas:

- `clienteId` (mongoose.Schema.Types.ObjectId/FK): Referencia as vendas do cliente que fez a compra.
- `valorTotal` (Number/default: 0/NotNull): Referencia o valor total de produtos comprados por esse cliente.

---

## API Endpoints

## Clientes

#### GET /clientes

Este endpoint retorna todos os clientes cadastrados.

#### Exemplo de Requisição:

```json
GET /clientes
```

#### Exemplo de Resposta (200 OK):

```json
{
    "data": [
        {
            "_id": "cliente_id_1",
            "nome": "Emy",
            "telefone": "1234567890",
            "email": "emy@exemplo.com"
        },
        {
            "_id": "cliente_id_2",
            "nome": "Amelie",
            "telefone": "0987654321",
            "email": "amelie@exemplo.com"
        }
    ]
}

```
### GET /clientes/:id

Este endpoint retorna um cliente específico com base no ID fornecido.

### Exemplo de Requisição:

```json
GET /clientes/cliente_id_2
```
### Exemplo de Resposta (200 OK):


```json
{
    "data": {
        "_id": "cliente_id_2",
        "nome": "Amelie",
        "telefone": "0987654321",
        "email": "amelie@exemplo.com"
    }
}
```
### POST /clientes

Este endpoint cria um novo cliente com os dados fornecidos no corpo da requisição.

### Exemplo de Requisição:

```json
{
    "nome": "Lily",
    "telefone": "1122334455",
    "email": "Lily@exemplo.com"
}

```

### Exemplo de Resposta (201 Created):

```json
{
  "_id": "cliente_id_3",
  "nome": "Lily",
  "telefone": "1122334455",
  "email": "Lily@exemplo.com"
}
```

### PUT /clientes/:id

Este endpoint atualiza um cliente existente com base no ID fornecido e os dados no corpo da requisição.

### Exemplo de Requisição:

```json
PUT /clientes/cliente_id_3
```

```json
{
  "nome": "Lilly Ann"
}
```

### Exemplo de Resposta (200 OK):

```json
{
  "_id": "cliente_id_3",
  "nome": "Lilly Ann",
  "telefone": "1122334455",
  "email": "Lily@exemplo.com"
}
```

### DELETE /clientes/:id

Este endpoint exclui um cliente base no ID fornecido.

### Exemplo de Requisição:

```json
DELETE /clientes/cliente_id_1
```

### Exemplo de Resposta (200 OK):

```json
{
    "message": "Cliente excluído com sucesso!"
}
```
## Estoque

### GET /estoque

Este endpoint busca todos os produtos no estoque no banco de dados, retornando apenas o nome e a quantidade disponível de cada produto.

### Exemplo de Requisição:

```json
{
    "data": [
        {
            "nome": "Sorvete de morango",
            "quantidadeDisponivel": 8
        },
        {
            "nome": "Salgadinho",
            "quantidadeDisponivel": 50
        }
    ]
}
```
## Pedidos

### GET /pedidos

Esse endpoint busca todos os pedidos no banco de dados, incluindo os dados do cliente e do produto associados a cada pedido.

### Exemplo de Requisição:

```json
{
    "data": [
        {
            "_id": "pedido_id_1",
            "cliente": {
                "_id": "cliente_id_3",
                "nome": "Lily Ann",
                "telefone": "1122334455",
                "email": "Lily@exemplo.com"
            },
            "produto": {
                "_id": "produto_id_2",
                "nome": "Salgadinho",
                "valor": 35,
                "quantidadeDisponivel": 50
            },
            "valorProduto": 35
        },
        
        {
            "_id": "pedido_id_2",
            "cliente": {
                "_id": "cliente_id_2",
                "nome": "Amelie",
                "telefone": "0987654321",
                "email": "amelie@exemplo.com"
            },
            "produto": {
                "_id": "produto_id_3",
                "nome": "Bombom",
                "valor": 2,
                "quantidadeDisponivel": 200
            },
            "valorProduto": 2
        }
    ]
}
```
### GET /pedidos/:id

Esse endpoint busca um pedido específico pelo seu ID, incluindo os dados do cliente e do produto associados ao pedido.

### Exemplo de Requisição:

```json
GET /pedidos/pedido_id_2
```

### Exemplo de Resposta (200 OK):

```json
{
    "_id": "pedido_id_2",
    "cliente": {
        "_id": "cliente_id_2",
        "nome": "Amelie",
        "telefone": "0987654321",
        "email": "amelie@exemplo.com"
    },
    "produto": {
        "_id": "produto_id_3",
        "nome": "Bombom",
        "valor": 2,
        "quantidadeDisponivel": 200
    },
    "valorProduto": 2
}
```

### POST /pedidos

Esse endpoint realiza um pedido e registra uma venda para um cliente específico. O ID do cliente e do produto são passados no corpo da solicitação.

### Exemplo de Requisição:

```json
{
    "clienteId": "cliente_id_1",
    "produtoId": "produto_id_2"
}
```
### Exemplo de Resposta (200 OK):

```json
{
    "data": {
        "_id": "pedido_id_3",
        "cliente": "cliente_id_1",
        "produto": "produto_id_2",
        "valorProduto": 2
    }
}
```

### PUT /pedidos/:id

Esse endpoint atualiza um pedido específico pelo seu ID. O ID do pedido é passado como um parâmetro na URL, e o novo ID do produto é passado no corpo da solicitação.

## Exemplo de Requisição:

```json
PUT /pedidos/pedido_id_3
```

```json
{
    "produtoId": "produto_id_3"
}
```
### Exemplo de Resposta (200 OK):

```json
{
    "data": {
        "_id": "pedido_id_3",
        "cliente": "cliente_id_1",
        "produto": "produto_id_3",
        "valorProduto": 2
    }
}
```
### DELETE /pedidos/:id

Esse endpoint cancela um pedido específico pelo seu ID. O ID do pedido é passado como um parâmetro na URL.

### Exemplo de Requisição:

```json
DELETE /pedidos/pedido_id_3
```

### Exemplo de Resposta (200 OK):

```json
{
    "message": "Pedido cancelado com sucesso!"
}
```

## Produtos

### GET /produtos

Esse endpoint busca todos os produtos no banco de dados.

## Exemplo de Requisição:

```json
{
    "data": [
        {
            "_id": "produto_id_1",
            "nome": "Sorvete de morango",
            "descricao": "Sorvete de morango marca Delicy",
            "quantidadeDisponivel": 8,
            "valor": 12
        },
        {
            "_id": "produto_id_2",
            "nome": "Salgadinho",
            "descricao": "Salgado de frango",
            "quantidadeDisponivel": 50,
            "valor": 35
        }
    ]
}
```

### GET /produtos/:id

Esse endpoint busca um produto específico pelo seu ID.

### Exemplo de Requisição:

```json
GET /produtos/produto_id_2
```
### Exemplo de Resposta (200 OK):

```json
{
    "_id": "produto_id_2",
    "nome": "Salgadinho",
    "descricao": "Salgado de frango",
    "quantidadeDisponivel": 50,
    "valor": 35
}
```

### POST /produtos

Esse endpoint cria um novo produto. Requer o nome, descrição, quantidade disponível e valor do produto no corpo da solicitação.

### Exemplo de Requisição:

```json
{
    "nome": "Bombom",
    "descricao": "Bombom de uva",
    "quantidadeDisponivel": 200,
    "valor": 2
}
```
### PUT /produtos/:id

Esse endpoint atualiza um produto específico pelo seu ID. O ID do produto é passado como um parâmetro na URL, e o novo nome, descrição, quantidade disponível e valor são passados no corpo da solicitação.

### Exemplo de Requisição:

```json
PUT /produtos/produto_id_2
```
```json
{
    "nome": "Salgadinho",
    "descricao": "Salgadinho de queijo",
    "quantidadeDisponivel": 45,
    "valor": 35
}
```
### DELETE /produtos/:id

Esse endpoint exclui um produto específico pelo seu ID. O ID é passado como um parâmetro na URL.

### Exemplo de Requisição:

```json
DELETE /produtos/produto_id_1
```

### Exemplo de Resposta (200 OK):

```json
{
    "message": "Produto excluído com sucesso!"
}
```

## Vendas
### GET /vendas
Esse endpoint busca todas as vendas no banco de dados. Ela também preenche os dados do cliente associado a cada venda, mas apenas o nome do cliente é selecionado. Além disso, apenas o cliente e o valor total de cada venda são selecionados para serem retornados. Não requer nenhum parâmetro.

### Exemplo de Requisição:

```json
GET /vendas
```

### Exemplo de Resposta (200 OK):

```json
{
    "data": [
        {
            "cliente": {
                "_id": "cliente_id_1",
                "nome": "Emilly"
            },
            "valorTotal": 150
        },
        {
            "cliente": {
                "_id": "cliente_id_2",
                "nome": "Amelie"
            },
            "valorTotal": 4
        }
    ]
}
```

Esta documentação serve como um manual do usuário para a sua aplicação. Ela dá uma ideia geral do que a API pode fazer, como ela é estruturada e como você pode usá-la.

Se você quiser sugerir mais exemplos de como usar a aplicação ou se quiser incluir alguns cenários de teste adicionais, fique a vontade!

Espero que tenham gostado!

---
