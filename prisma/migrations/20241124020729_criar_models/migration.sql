-- CreateTable
CREATE TABLE "pessoas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "CPF" VARCHAR(14) NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "mae" VARCHAR(100) NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "dataDeCadastro" TIMESTAMP(3) NOT NULL,
    "status" CHAR(10) NOT NULL,
    "pessoasId" INTEGER NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "id" SERIAL NOT NULL,
    "matricula" INTEGER NOT NULL,
    "anoIngresso" INTEGER NOT NULL,
    "pessoasId" INTEGER NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professores" (
    "id" SERIAL NOT NULL,
    "areaDeAtuacao" VARCHAR(45) NOT NULL,
    "numeroRegistro" INTEGER NOT NULL,
    "pessoasId" INTEGER NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoas_CPF_key" ON "pessoas"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_pessoasId_key" ON "clientes"("pessoasId");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_matricula_key" ON "alunos"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_pessoasId_key" ON "alunos"("pessoasId");

-- CreateIndex
CREATE UNIQUE INDEX "professores_pessoasId_key" ON "professores"("pessoasId");

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professores" ADD CONSTRAINT "professores_pessoasId_fkey" FOREIGN KEY ("pessoasId") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
