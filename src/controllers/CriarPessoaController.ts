import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CriarPessoaController {
    async handle(request: Request, response: Response): Promise<any>{
        const { nome, CPF, dataNasc, mae } = request.body;

        try {
            const pessoa = await prismaClient.pessoa.create({
                data: {
                    nome,
                    CPF,
                    dataNasc,
                    mae,
                },
            });

            return response.status(201).json(pessoa); // Retorne a pessoa criada com status HTTP apropriado
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao criar pessoa" });
        }
    }
}
