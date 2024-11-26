import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class AtualizarPessoaController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;
        const { nome, CPF, dataNasc, mae } = request.body;

        try {
            const pessoa = await prismaClient.pessoa.update({
                where: { id: Number(id) },
                data: { nome, CPF, dataNasc, mae },
            });

            return response.json(pessoa);
        } catch (error) {
            console.error(error);

            // Garantir que o erro é do Prisma
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    return response.status(404).json({ error: "Pessoa não encontrada para atualização" });
                }
            }

            return response.status(500).json({ error: "Erro ao atualizar pessoa" });
        }
    }
}
