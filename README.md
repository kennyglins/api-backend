# NLW Agents

Projeto desenvolvido durante o evento NLW (Next Level Week) da Rocketseat, focado em agentes de IA.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática
- **Fastify** - Framework web rápido
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **Docker** - Containerização

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

## ⚙️ Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env`:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. Inicie o banco de dados com Docker:
```bash
docker-compose up -d
```

5. Execute as migrações do banco:
```bash
npm drizzle-kit migrate
```
6. Popule o banco com dados de exemplo:
```bash
npm run db:seed
```

## 🏃‍♂️ Executando

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts    # Configuração do banco
│   ├── migrations/      # Migrações do Drizzle
│   └── schema/          # Schemas do banco
├── http/
│   └── routes/          # Rotas da API
├── env.ts              # Validação de variáveis
└── server.ts           # Servidor principal
```

## 🛠️ Padrões Utilizados

- **Clean Architecture** - Separação de responsabilidades
- **Type Safety** - Validação com Zod e TypeScript
- **ORM Type-Safe** - Drizzle ORM com schemas tipados
- **Environment Validation** - Validação de variáveis de ambiente
- **Plugin Pattern** - Rotas como plugins do Fastify
