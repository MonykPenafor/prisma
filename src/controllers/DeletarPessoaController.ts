import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeletarPessoaController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        try {
            await prismaClient.pessoa.delete({
                where: { id: Number(id) },
            });

            return response.status(204).send(); // Sem conteúdo, mas deletado com sucesso
        } catch (error) {
            console.error(error);

            // Garantir que o erro é do Prisma
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    return response.status(404).json({ error: "Pessoa não encontrada para exclusão" });
                }
            }

            return response.status(500).json({ error: "Erro ao deletar pessoa" });
        }
    }
}
