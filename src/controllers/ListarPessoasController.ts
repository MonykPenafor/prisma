import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ListarPessoasController {
    async handle(request: Request, response: Response): Promise<any> {
        try {
            const pessoas = await prismaClient.pessoa.findMany();
            return response.json(pessoas);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao listar pessoas" });
        }
    }
}
