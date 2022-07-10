# **CoreLab Api Challenge**

Um CRUD para anúncios de veículos, feito nos conceitos do **S.O.L.I.D**.

## **Visão Geral.**

### O desafio

Foi proposto um desafio da CoreLab. Onde seria feito uma API para fazer o gerenciamento de anúncios de veículos.

**O CRUD pode ser capaz de:**

- Criar um anúncio de veículo.
- Editar um anúncio de veículo.
- Deletar um anúncio de veículo.
- Filtrar um veículo por qualquer campo.
- Filtrar anúncios de um veículo pela cor, marca ou modelo

#

## **O Processo de desenvolvimento.**

### Ferramentas utilizadas

#### Back-end

- TypeScript
- Express
- Class-Validator
- Prisma
- Express-async-error
- Helmet
- Morgan
- Cors
- Http-status
- Winston

#### Sobre algumas libs

> **Prisma** > _Utilizado para fazer o banco de dados da api, utilizado MySQL._

> **Winston** > _Utilizado para fazer um logger mais completo da API._

> **Class-Validator** > _Utilizado para fazer a validação das requisições._

#

### Estrutura do projeto

    src
      ├── configs/          # Configuração de ambiente ENV e StatusCodes
      ├── controllers/      # Controladores de cada rota da API
      ├── database/         # Instância do banco de dados Prisma
      ├── DTOs/             # Typagem de classes da API
      ├── erros/            # HttpExeption para lançar erros
      ├── integrations/     # Conexão das instância de cada rota da API
      ├── interfaces/       # Typagem gerais da API
      ├── middlewares/      # Mediadores de requisições
      ├── prisma/           # Configuração do Prisma
      ├── routes/           # Rotas da API
      ├── usecases/         # Casos de uso de cada rota da API
      ├── utils/            # Utilidades para API, Logger
      ├ app.ts          # Configuração do servidor express
      └ server.ts       # Inicialização do servidor

#

## **Rotas da API**

### GET:

> **/vehicles** > _Lista todos os veículos._

> **/vehicles/favorites** > _Lista todos os veículos favoritos._

> **/vehicles/search** > _Lista todos os veículos que atendem ao filtro._

> **/vehicles/filter** > _Lista todos os veículos que atendem ao filtro._

> **/vehicles/get_filters** > _Lista os dados necessário para filtragem._

### POST:

> **/vehicles** > _Cria um novo veículo._

### PUT:

> **/vehicles/:id** > _Atualiza um veículo._

### DELETE:

> **/vehicles/:id** > _Deleta um veículo._

#

## **Como rodar a aplicação.**

### requisitos para rodar a aplicação

- NodeJS
- Docker

### Comandos

- Faça o clone da aplicação e entre na pasta do projeto:

  ```bash
  git clone git@github.com:BaianorASR/corelab-backend.git && cd corelab-backend
  ```

- Instale as dependências:

  - com npm:

    ```bash
    npm install
    ```

  - com yarn:
    ```bash
    yarn install
    ```

- Execute o docker para subir o banco de dados:

  ```bash
  docker-compose up -d --build
  ```

- Execute o servidor:

  - com npm:

    ```bash
    npm run dev
    ```

  - com yarn:
    ```bash
    yarn dev
    ```

#

## Author

- LinkedIn - [Adison (Baianor) Reis](https://www.linkedin.com/in/baianorasr/)
