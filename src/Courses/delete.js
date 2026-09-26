const prisma = require("./prismaClient");

async function main() {
  const id = Number(process.argv[2]);

  if (!id) {
    console.log("Uso: node src/Courses/delete.js ID");
    return;
  }

  const course = await prisma.course.delete({ where: { id } });

  console.log("Curso excluído:", course);
}

main()
  .catch((e) => {
    if (e.code === "P2025") console.error("Curso não encontrado.");
    else console.error("Erro ao excluir:", e.message);
  })
  .finally(() => prisma.$disconnect());