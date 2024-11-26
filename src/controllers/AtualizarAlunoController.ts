import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Prisma } from "@prisma/client";

export class AtualizarAlunoController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;
        const { matricula, anoIngresso, pessoaId } = request.body;

        try {
            const aluno = await prismaClient.aluno.update({
                where: { id: Number(id) },
                data: {
                    matricula,
                    anoIngresso,
                    pessoaId,
                },
            });

            return response.json(aluno);
        } catch (error) {
            console.error(error);

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    return response.status(404).json({ error: "Aluno não encontrado para atualização" });
                }
            }

            return response.status(500).json({ error: "Erro ao atualizar aluno" });
        }
    }
}
