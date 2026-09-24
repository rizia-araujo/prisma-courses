const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.create({
    data: {
      title: "Node.js com Prisma",
      description: "Curso prático de ORM",
      modules: {
        create: [
          { title: "Introdução ao Prisma", order: 1 },
          { title: "Migrations e Docker", order: 2 },
        ],
      },
    },
    include: { modules: true },
  });
  console.log("Criado:", JSON.stringify(course, null, 2));

  const all = await prisma.course.findMany({
    include: { modules: { orderBy: { order: "asc" } } },
  });
  console.log("Todos os cursos:", JSON.stringify(all, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());