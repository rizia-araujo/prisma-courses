const prisma = require("./prismaClient");

async function main() {
  const [title, description] = process.argv.slice(2);

  if (!title) {
    console.log('Uso: node src/Courses/create.js "Título" "Descrição"');
    return;
  }

  const course = await prisma.course.create({
    data: { title, description },
  });

  console.log("Curso criado:", course);
}

main()
  .catch((e) => console.error("Erro ao criar:", e.message))
  .finally(() => prisma.$disconnect());