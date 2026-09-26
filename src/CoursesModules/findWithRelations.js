const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.courseN.findMany({
    include: {
      modules: {
        include: { module: true },
      },
    },
  });

  console.log(JSON.stringify(courses, null, 2));
}

main()
  .catch((e) => console.error("Erro ao buscar:", e.message))
  .finally(() => prisma.$disconnect());