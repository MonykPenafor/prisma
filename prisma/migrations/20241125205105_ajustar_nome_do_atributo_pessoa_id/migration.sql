/*
  Warnings:

  - You are about to drop the column `pessoasId` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `pessoasId` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `pessoasId` on the `professores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pessoaId]` on the table `alunos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pessoaId]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pessoaId]` on the table `professores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pessoaId` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoaId` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_pessoasId_fkey";

-- DropForeignKey
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pessoasId_fkey";

-- DropForeignKey
ALTER TABLE "professores" DROP CONSTRAINT "professores_pessoasId_fkey";

-- DropIndex
DROP INDEX "alunos_pessoasId_key";

-- DropIndex
DROP INDEX "clientes_pessoasId_key";

-- DropIndex
DROP INDEX "professores_pessoasId_key";

-- AlterTable
ALTER TABLE "alunos" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "professores" DROP COLUMN "pessoasId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "alunos_pessoaId_key" ON "alunos"("pessoaId");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_pessoaId_key" ON "clientes"("pessoaId");

-- CreateIndex
CREATE UNIQUE INDEX "professores_pessoaId_key" ON "professores"("pessoaId");

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professores" ADD CONSTRAINT "professores_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
