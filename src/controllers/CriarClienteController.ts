import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CriarClienteController {
    async handle(request: Request, response: Response): Promise<any> {
        const { dataDeCadastro, status, pessoaId } = request.body;

        try {
            const cliente = await prismaClient.cliente.create({
                data: {
                    dataDeCadastro,
                    status,
                    pessoaId,
                },
            });

            return response.status(201).json(cliente);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao criar cliente" });
        }
    }
}
