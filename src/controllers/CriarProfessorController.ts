import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CriarProfessorController {
    async handle(request: Request, response: Response): Promise<any> {
        const { areaDeAtuacao, numeroRegistro, pessoaId } = request.body;

        try {
            const professor = await prismaClient.professor.create({
                data: {
                    areaDeAtuacao,
                    numeroRegistro,
                    pessoaId,
                },
            });

            return response.status(201).json(professor);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao criar professor" });
        }
    }
}
