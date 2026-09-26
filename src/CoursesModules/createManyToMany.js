const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Dois cursos diferentes
  const courseBackend = await prisma.courseN.create({
    data: { title: "Backend com Node.js" },
  });

  const courseFullstack = await prisma.courseN.create({
    data: { title: "Fullstack JavaScript" },
  });

  // Um módulo que vai pertencer aos DOIS cursos (é o "muitos-para-muitos")
  const moduleApi = await prisma.moduleN.create({
    data: { title: "Fundamentos de API REST" },
  });

  // Um segundo módulo, exclusivo do curso Backend
  const moduleDb = await prisma.moduleN.create({
    data: { title: "Banco de Dados com Prisma" },
  });

  // Vincula o módulo de API aos dois cursos
  await prisma.coursesModules.create({
    data: { courseId: courseBackend.id, moduleId: moduleApi.id },
  });

  await prisma.coursesModules.create({
    data: { courseId: courseFullstack.id, moduleId: moduleApi.id },
  });

  // Vincula o módulo de banco de dados só ao curso Backend
  await prisma.coursesModules.create({
    data: { courseId: courseBackend.id, moduleId: moduleDb.id },
  });

  console.log("Cursos criados:", { courseBackend, courseFullstack });
  console.log("Módulos criados:", { moduleApi, moduleDb });
  console.log("Vínculos: API está em 2 cursos, Banco de Dados está em 1.");
}

main()
  .catch((e) => console.error("Erro ao criar N:N:", e.message))
  .finally(() => prisma.$disconnect());