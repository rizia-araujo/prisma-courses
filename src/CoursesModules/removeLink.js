const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const [courseIdArg, moduleIdArg] = process.argv.slice(2);
  const courseId = Number(courseIdArg);
  const moduleId = Number(moduleIdArg);

  if (!courseId || !moduleId) {
    console.log("Uso: node src/CoursesModules/removeLink.js COURSE_ID MODULE_ID");
    return;
  }

  const removed = await prisma.coursesModules.delete({
    where: {
      courseId_moduleId: { courseId, moduleId },
    },
  });

  console.log("Vínculo removido:", removed);
}

main()
  .catch((e) => {
    if (e.code === "P2025") console.error("Vínculo não encontrado.");
    else console.error("Erro ao remover:", e.message);
  })
  .finally(() => prisma.$disconnect());