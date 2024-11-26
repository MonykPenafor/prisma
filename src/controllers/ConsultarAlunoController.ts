import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ConsultarAlunoController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        try {
            const aluno = await prismaClient.aluno.findUnique({
                where: { id: Number(id) },
                include: {
                    pessoa: true,  // Inclui os dados da pessoa associada ao aluno
                },
            });

            if (!aluno) {
                return response.status(404).json({ error: "Aluno não encontrado" });
            }

            return response.json(aluno);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao consultar aluno" });
        }
    }
}
