# API de Gerenciamento de Produtos

Esta é uma API REST desenvolvida em NestJS para gerenciar um CRUD de produtos. A API utiliza MariaDB como banco de dados, Docker para containerização e Zod para validação de dados. Além disso, a documentação da API é gerada automaticamente com Swagger e a autenticação é realizada via JWT com AuthGuard.

## Sumário

- Tecnologias Utilizadas
- Instalação e Execução
- Decisões Técnicas
- Endpoints da API
- Exemplos de Requisições e Respostas
- Contribuição
- Licença

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **NestJS**: Framework para construção de APIs escaláveis e eficientes.
- **TypeORM**: ORM para acesso ao banco de dados.
- **MariaDB**: Banco de dados relacional.
- **Docker**: Para containerização da aplicação e banco de dados.
- **Zod**: Biblioteca para validação de dados.
- **Swagger**: Para documentação da API.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **AuthGuard**: Middleware de autenticação do NestJS.

## Instalação e Execução

### Pré-requisitos

- Docker e Docker Compose instalados.
- Node.js (versão 18 ou superior).

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone git@github.com:coderick137/teste-gerenciamento-de-produtos.git

   cd teste-gerenciamento-de-produtos
   ```

2. Construa e inicie os contêineres:

   ```bash
   docker-compose up --build
   #Ou
   docker-compose --file docker-compose.yml build
   ```

   Ou rode o porojeto:

   ```bash
   # development
   $ npm run start

   # watch mode
   $ npm run start:dev

   # production mode
   $ npm run start:prod

   ```

3. Acesse a API em:

   - Swagger UI: <http://localhost:3000/api>

4. Para parar os contêineres, execute:

   ```bash
   docker-compose down
   ```

## Decisões Técnicas

### 1. Uso de Zod para Validação

Zod foi escolhido por ser uma biblioteca moderna e eficiente para validação de dados. Ele permite criar esquemas de validação de forma declarativa e integra-se facilmente com o NestJS.

### 2. TypeORM com MariaDB

TypeORM foi utilizado por sua integração nativa com NestJS e suporte a múltiplos bancos de dados. O MariaDB foi escolhido por ser um banco de dados robusto e compatível com MySQL.

### 3. Containerização com Docker

O uso de Docker facilita a configuração do ambiente de desenvolvimento e garante que a aplicação funcione de forma consistente em diferentes sistemas.

### 4. Autenticação com JWT e AuthGuard

A API utiliza JWT para autenticação e protege as rotas utilizando AuthGuard. Isso garante segurança na manipulação dos produtos e exige um token válido para acessar os endpoints protegidos.

### 5. Swagger para Documentação

Swagger foi utilizado para gerar documentação automática da API, permitindo que os desenvolvedores testem e entendam os endpoints de forma interativa.

## Endpoints da API

| Método | Endpoint          | Descrição                      |
| ------ | ----------------- | ------------------------------ |
| POST   | /auth/login       | Autenticação de usuário.       |
| POST   | /produtos         | Cria um novo produto.          |
| GET    | /produtos         | Lista todos os produtos.       |
| GET    | /produtos/:codigo | Busca um produto pelo código.  |
| PUT    | /produtos/:codigo | Atualiza um produto existente. |
| DELETE | /produtos/:codigo | Remove um produto.             |

## Exemplos de Requisições e Respostas

### 1. Autenticação

#### Requisição:

```http
POST /auth/login HTTP/1.1
Content-Type: application/json

{
  "email": "email.teste@email.com",
  "senha": "senha-teste"
}
```

#### Resposta:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Criar um Produto (Requer Token JWT)

#### Requisição:

```http
POST /produtos HTTP/1.1
Authorization: Bearer <TOKEN_JWT>
Content-Type: application/json

{
  "codigo": "P001",
  "nome": "Notebook",
  "codigo_barras": "1234567890123",
  "quantidade": 10.5,
  "preco": 3500.00
}
```

#### Resposta:

```json
{
  "codigo": "P001",
  "nome": "Notebook",
  "codigo_barras": "1234567890123",
  "quantidade": 10.5,
  "preco": 3500.0
}
```

### 3. Listar Todos os Produtos

#### Requisição:

```http
GET /produtos HTTP/1.1
```

#### Resposta:

```json
[
  {
    "codigo": "P001",
    "nome": "Notebook",
    "codigo_barras": "1234567890123",
    "quantidade": 10.5,
    "preco": 3500.0
  },
  {
    "codigo": "P002",
    "nome": "Smartphone",
    "codigo_barras": "9876543210987",
    "quantidade": 20.0,
    "preco": 1500.0
  }
]
```

### 4. Buscar um Produto pelo Código

#### Requisição:

```http
GET /produtos/P001 HTTP/1.1
```

#### Resposta:

```json
{
  "codigo": "P001",
  "nome": "Notebook",
  "codigo_barras": "1234567890123",
  "quantidade": 10.5,
  "preco": 3500.0
}
```

### 5. Atualizar um Produto (Requer Token JWT)

#### Requisição:

```http
PUT /produtos/P001 HTTP/1.1
Authorization: Bearer <TOKEN_JWT>
Content-Type: application/json

{
  "quantidade": 15.0
}
```

#### Resposta:

```json
{
  "codigo": "P001",
  "nome": "Notebook",
  "codigo_barras": "1234567890123",
  "quantidade": 15.0,
  "preco": 3500.0
}
```

### 6. Remover um Produto (Requer Token JWT)

#### Requisição:

```http
DELETE /produtos/P001 HTTP/1.1
Authorization: Bearer <TOKEN_JWT>
```

#### Resposta:

```http
HTTP/1.1 204 No Content
```

### Aplicação feita por

- Linkedin: [Ricardo Anjos](https://www.linkedin.com/in/ricardoanjosn/)
- WhatsApp: 61 994215316
