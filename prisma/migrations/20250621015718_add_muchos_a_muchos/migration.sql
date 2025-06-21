/*
  Warnings:

  - You are about to drop the column `regionId` on the `Cultivo` table. All the data in the column will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cultivo" DROP CONSTRAINT "Cultivo_regionId_fkey";

-- AlterTable
ALTER TABLE "Cultivo" DROP COLUMN "regionId";

-- DropTable
DROP TABLE "Region";

-- CreateTable
CREATE TABLE "Departamento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CultivoDepartamento" (
    "id" SERIAL NOT NULL,
    "cultivoId" INTEGER NOT NULL,
    "departamentoId" INTEGER NOT NULL,

    CONSTRAINT "CultivoDepartamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Departamento_nombre_key" ON "Departamento"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "CultivoDepartamento_cultivoId_departamentoId_key" ON "CultivoDepartamento"("cultivoId", "departamentoId");

-- AddForeignKey
ALTER TABLE "CultivoDepartamento" ADD CONSTRAINT "CultivoDepartamento_cultivoId_fkey" FOREIGN KEY ("cultivoId") REFERENCES "Cultivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CultivoDepartamento" ADD CONSTRAINT "CultivoDepartamento_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
