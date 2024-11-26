import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ListarAlunosController {
    async handle(request: Request, response: Response): Promise<any> {
        try {
            const alunos = await prismaClient.aluno.findMany({
                include: {
                    pessoa: true,  // Inclui os dados da pessoa associada ao aluno
                },
            });

            return response.json(alunos);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao listar alunos" });
        }
    }
}
