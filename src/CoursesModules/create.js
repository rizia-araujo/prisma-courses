const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courseN.create({
    data: { title: "Backend com Node.js" },
  });

  const module1 = await prisma.moduleN.create({
    data: { title: "Fundamentos de API REST" },
  });

  const link = await prisma.coursesModules.create({
    data: {
      courseId: course.id,
      moduleId: module1.id,
    },
  });

  console.log("Curso criado:", course);
  console.log("Módulo criado:", module1);
  console.log("Vínculo criado:", link);
}

main()
  .catch((e) => console.error("Erro ao criar:", e.message))
  .finally(() => prisma.$disconnect());