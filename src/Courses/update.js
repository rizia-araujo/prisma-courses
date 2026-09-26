const prisma = require("./prismaClient");

async function main() {
  const [idArg, title, description] = process.argv.slice(2);
  const id = Number(idArg);

  if (!id || !title) {
    console.log('Uso: node src/Courses/update.js ID "Novo título" "Nova descrição"');
    return;
  }

  const course = await prisma.course.update({
    where: { id },
    data: { title, description },
  });

  console.log("Curso atualizado:", course);
}

main()
  .catch((e) => {
    if (e.code === "P2025") console.error("Curso não encontrado.");
    else console.error("Erro ao atualizar:", e.message);
  })
  .finally(() => prisma.$disconnect());