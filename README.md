# Projeto Prisma ORM + PostgreSQL (Docker)

Modelos `Course` e `Module` (relação 1:N) com Prisma Migrate.

## Como rodar

```bash
cp .env.example .env
docker compose up -d
npm install
npx prisma migrate dev
node index.js
```