const prisma = require("./prismaClient");

async function main() {
  const courses = await prisma.course.findMany({
    include: { modules: true },
    orderBy: { id: "asc" },
  });

  if (courses.length === 0) {
    console.log("Nenhum curso cadastrado.");
    return;
  }

  console.log(JSON.stringify(courses, null, 2));
}

main()
  .catch((e) => console.error("Erro ao listar:", e.message))
  .finally(() => prisma.$disconnect());