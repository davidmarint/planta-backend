-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cultivo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "temporada" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Cultivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cultivo" ADD CONSTRAINT "Cultivo_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
