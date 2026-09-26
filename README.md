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
## CRUD de Courses

```bash
node src/Courses/create.js "Título" "Descrição"
node src/Courses/findAll.js
node src/Courses/findById.js ID
node src/Courses/update.js ID "Novo título" "Nova descrição"
node src/Courses/delete.js ID
```