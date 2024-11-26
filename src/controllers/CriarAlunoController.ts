import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CriarAlunoController {
    async handle(request: Request, response: Response): Promise<any> {
        const { matricula, anoIngresso, pessoaId } = request.body;

        try {
            const aluno = await prismaClient.aluno.create({
                data: {
                    matricula,
                    anoIngresso,
                    pessoaId,
                },
            });

            return response.status(201).json(aluno);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao criar aluno" });
        }
    }
}