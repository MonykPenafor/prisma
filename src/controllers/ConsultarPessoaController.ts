import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ConsultarPessoaController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        try {
            const pessoa = await prismaClient.pessoa.findUnique({
                where: { id: Number(id) },
            });

            if (!pessoa) {
                return response.status(404).json({ error: "Pessoa não encontrada" });
            }

            return response.json(pessoa);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao consultar pessoa" });
        }
    }
}
