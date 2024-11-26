-- DropForeignKey
ALTER TABLE "alunos" DROP CONSTRAINT "alunos_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "professores" DROP CONSTRAINT "professores_pessoaId_fkey";

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professores" ADD CONSTRAINT "professores_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
