# 🧠 NLW AGENTS

API backend do **NLW AGENTS**, uma aplicação inspirada no projeto *LetMeAsk* da Rocketseat.  
Desenvolvida com **Node.js**, **Fastify** e **TypeScript**, esta API gerencia as rotas e a comunicação com o banco de dados **PostgreSQL**, containerizado via **Docker**.

---

## 🚀 Tecnologias utilizadas

- **Node.js** — runtime JavaScript
- **Fastify** — framework backend leve e performático
- **TypeScript** — tipagem estática para maior segurança
- **PostgreSQL** — banco de dados relacional
- **Docker** — containerização e ambiente isolado
- **Dotenv** — gerenciamento de variáveis de ambiente

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nlw-agents.git
cd nlw-agents
```

2️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```


⚠️ Lembre-se de ajustar o nome do banco (agents) caso utilize outro no seu docker-compose.yml.

3️⃣ Executar com Docker

Suba os containers do projeto:

```
docker-compose up
```

Isso irá iniciar o banco de dados PostgreSQL e o servidor Fastify simultaneamente.

4️⃣ Rodar localmente (sem Docker)

Caso prefira executar localmente:

```
npm install
npm run dev
```

O servidor estará rodando em:
👉 http://localhost:3333

📄 Licença

Este projeto está sob a licença MIT.
