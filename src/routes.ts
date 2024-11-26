import { Router } from "express";
import { CriarPessoaController } from "./controllers/CriarPessoaController";
import { ListarPessoasController } from "./controllers/ListarPessoasController";
import { ConsultarPessoaController } from "./controllers/ConsultarPessoaController";
import { AtualizarPessoaController } from "./controllers/AtualizarPessoaController";
import { DeletarPessoaController } from "./controllers/DeletarPessoaController";

import { CriarClienteController } from "./controllers/CriarClienteController";

import { CriarAlunoController } from "./controllers/CriarAlunoController";
import { ConsultarAlunoController } from "./controllers/ConsultarAlunoController";
import { ListarAlunosController } from "./controllers/ListarAlunosController";
import { AtualizarAlunoController } from "./controllers/AtualizarAlunoController";
import { DeletarAlunoController } from "./controllers/DeletarAlunoController";

import { CriarProfessorController } from "./controllers/CriarProfessorController";

const router = Router();

// Instâncias dos controladores
const criarPessoa = new CriarPessoaController();
const listarPessoasController = new ListarPessoasController();
const consultarPessoaController = new ConsultarPessoaController();
const atualizarPessoaController = new AtualizarPessoaController();
const deletarPessoaController = new DeletarPessoaController();

const criarCliente = new CriarClienteController();

const criarAluno = new CriarAlunoController();
const consultarAlunoController = new ConsultarAlunoController();
const listarAlunosController = new ListarAlunosController();
const atualizarAlunoController = new AtualizarAlunoController();
const deletarAlunoController = new DeletarAlunoController();

const criarProfessor = new CriarProfessorController();

// Rotas para criação das entidades
router.post("/pessoa", criarPessoa.handle);
router.get("/pessoas", listarPessoasController.handle);
router.get("/pessoas/:id", consultarPessoaController.handle);
router.put("/pessoas/:id", atualizarPessoaController.handle);
router.delete("/pessoas/:id", deletarPessoaController.handle);

router.post("/cliente", criarCliente.handle);

router.post("/aluno", criarAluno.handle);
router.get("/alunos/:id", consultarAlunoController.handle);    
router.get("/alunos", listarAlunosController.handle);           
router.put("/alunos/:id", atualizarAlunoController.handle);    
router.delete("/alunos/:id", deletarAlunoController.handle);  

router.post("/professor", criarProfessor.handle);

export { router };
