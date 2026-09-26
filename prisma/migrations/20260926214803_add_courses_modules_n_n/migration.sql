-- CreateTable
CREATE TABLE "CourseN" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "CourseN_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleN" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ModuleN_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursesModules" (
    "courseId" INTEGER NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "CoursesModules_pkey" PRIMARY KEY ("courseId","moduleId")
);

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "CourseN"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursesModules" ADD CONSTRAINT "CoursesModules_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ModuleN"("id") ON DELETE CASCADE ON UPDATE CASCADE;
