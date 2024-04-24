---
# Api-Rest-DNC

Este é o sexto desafio da DNC! Demorei um tempo para retomar os estudos, mas aqui estou eu, com mais um desafio concluído! Esse com certeza foi um dos mais desafiadores, quebrei bastante a cabeça e com muita ajuda e pesquisa consegui! Qualquer dúvida não hesite em perguntar, e toda sugestão é bem-vinda!

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
- **Controller (Controlador)**: Implementa a lógica de negócio e interage com os modelos para realizar operações de CRUD.
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

Configure a conexão com o MongoDB no arquivo de configuração (`config/mongo.js`).

### Iniciar o Servidor

```bash
yarn start
```

A aplicação estará disponível em `http://localhost:8080`. Você pode acessar as diferentes rotas definidas para interagir com os recursos da aplicação.

## Exemplo de Uso da API

```http
GET /clientes
GET /clientes/:id

POST /clientes
Content-Type: application/json

{
  "nome": "Nome do Cliente",
  "telefone": "123456789",
  "email": "cliente@exemplo.com"
}

PUT /clientes/:id
Content-Type: application/json

{
  "nome": "Novo Nome do Cliente",
  "telefone": "987654321"
}

DELETE /clientes/:id
```

Nota: Substitua `:id` pelo ID real do cliente, produto, pedido ou venda.

Esta documentação serve como um manual do usuário para a sua aplicação. Ela dá uma ideia geral do que a API pode fazer, como ela é estruturada e como você pode usá-la.

Se você quiser sugerir mais exemplos de como usar a aplicação ou se quiser incluir alguns cenários de teste adicionais, fique a vontade!

Espero que tenham gostado!

---

