import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Prisma } from "@prisma/client";

export class DeletarAlunoController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        try {
            await prismaClient.aluno.delete({
                where: { id: Number(id) },
            });

            return response.status(204).send(); // Sem conteúdo, mas deletado com sucesso
        } catch (error) {
            console.error(error);

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    return response.status(404).json({ error: "Aluno não encontrado para exclusão" });
                }
            }

            return response.status(500).json({ error: "Erro ao deletar aluno" });
        }
    }
}
