# API de Gerenciamento de Alunos

Uma API RESTful construída com Node.js, Express e TypeScript para gerenciar informações de alunos com autenticação JWT.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Documentação da API](#documentação-da-api)
  - [Autenticação](#autenticação)
  - [Gerenciamento de Alunos](#gerenciamento-de-alunos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Variáveis de Ambiente](#variáveis-de-ambiente)

## Funcionalidades

- 🔐 Autenticação JWT
- 👥 Registro e Login de Usuários
- 📚 Gerenciamento de Alunos (operações CRUD)
- 📊 Cálculo de Notas e Status
- 🔒 Rotas Protegidas
- 📝 Suporte a TypeScript

## Tecnologias

- Node.js
- Express.js
- TypeScript
- JSON Web Tokens (JWT)
- bcryptjs
- CORS

## Começando

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/rickxz/students-management-api
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O servidor iniciará na porta 3000 (padrão) ou na porta especificada nas variáveis de ambiente.

## Documentação da API

### Autenticação

#### Registrar Usuário
```http
POST /api/register
```
| Parâmetro  | Tipo     | Descrição   |
| :--------- | :------- | :------------ |
| `username` | `string` | **Obrigatório**. Nome de usuário |
| `password` | `string` | **Obrigatório**. Senha |

#### Login
```http
POST /api/login
```
| Parâmetro  | Tipo     | Descrição   |
| :--------- | :------- | :------------ |
| `username` | `string` | **Obrigatório**. Nome de usuário |
| `password` | `string` | **Obrigatório**. Senha |

Retorna um token JWT após login bem-sucedido.

### Gerenciamento de Alunos

Todas as rotas de gerenciamento de alunos requerem autenticação. Inclua o token JWT no cabeçalho Authorization:
```
Authorization: Bearer <seu-token>
```

#### Listar Todos os Alunos
```http
GET /api/alunos
```

#### Buscar Aluno por ID
```http
GET /api/alunos/:id
```

#### Obter Médias dos Alunos
```http
GET /api/alunos/medias
```
Retorna lista de alunos com suas médias.

#### Obter Status de Aprovação
```http
GET /api/alunos/aprovados
```
Retorna lista de alunos com seu status de aprovação (aprovado/reprovado).

#### Criar Aluno
```http
POST /api/alunos
```
| Parâmetro | Tipo     | Descrição   |
| :-------- | :------- | :------------ |
| `nome`    | `string` | **Obrigatório**. Nome do aluno |
| `ra`      | `string` | **Obrigatório**. Registro acadêmico |
| `nota1`   | `number` | **Obrigatório**. Primeira nota |
| `nota2`   | `number` | **Obrigatório**. Segunda nota |

#### Atualizar Aluno
```http
PUT /api/alunos/:id
```
Mesmos parâmetros que Criar Aluno, todos opcionais.

#### Excluir Aluno
```http
DELETE /api/alunos/:id
```

## Estrutura do Projeto

```
src/
├── config/         # Arquivos de configuração
├── interfaces/     # Interfaces TypeScript
├── middlewares/    # Middlewares do Express
├── models/         # Modelos de dados
├── routes/         # Definições de rotas
├── types/         # Definições de tipos TypeScript
└── server.ts      # Ponto de entrada da aplicação
```

## Variáveis de Ambiente

As seguintes variáveis de ambiente podem ser configuradas:

- `PORT`: Porta do servidor (padrão: 3000)
- `JWT_SECRET`: Chave secreta para tokens JWT

Crie um arquivo `.env` no diretório raiz:
```env
PORT=3000
JWT_SECRET=sua-chave-secreta
```

Observação: Em produção, sempre use variáveis de ambiente seguras e nunca dê commit de arquivos `.env`` para repositórios públicos.