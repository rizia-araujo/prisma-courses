const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Cria o autor e, na mesma operação, associa um livro a ele.
  // O Prisma cuida de gerar o authorId automaticamente na tabela Book.
  const author = await prisma.author.create({
    data: {
      name: "Machado de Assis",
      email: "machado.assis@example.com",
      books: {
        create: [
          { title: "Dom Casmurro", year: 1899 },
        ],
      },
    },
    include: { books: true },
  });

  console.log("Autor criado com livro associado:");
  console.log(JSON.stringify(author, null, 2));
}

main()
  .catch((e) => console.error("Erro ao criar autor e livro:", e.message))
  .finally(() => prisma.$disconnect());