const prisma = require("./prismaClient");

async function main() {
  const id = Number(process.argv[2]);

  if (!id) {
    console.log("Uso: node src/Courses/findById.js ID");
    return;
  }

  const course = await prisma.course.findUnique({
    where: { id },
    include: { modules: true },
  });

  if (!course) {
    console.log("Curso não encontrado.");
    return;
  }

  console.log("Curso:", JSON.stringify(course, null, 2));
}

main()
  .catch((e) => console.error("Erro ao buscar:", e.message))
  .finally(() => prisma.$disconnect());