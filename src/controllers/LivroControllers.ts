import { Request, Response } from "express";
import { LivroModel } from "../models/Livro";
import Logger from "../../config/logger";

export async function createLivro(req: Request, res: Response) {
    try {
        const data = req.body;
        const livro = await LivroModel.create(data);
        return res.status(201).send(livro);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function findLivrobyId(req: Request, res: Response){
    try {
        const id = req.params.id;
        const livro = await LivroModel.findById(id);

        if(!livro){
            return res.status(404).json({ error: `O filme com o id: ${id} não existe.`})
        }
        return res.status(200).json(livro)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

export async function getAllLivros(req: Request, res: Response){
    try {
        const livros = await LivroModel.find();
        return res.status(200).json(livros)

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

export async function removeLivro(req: Request, res: Response){
    try {
        const id = req.params.id;
        const livro = await LivroModel.findById(id);
        if(!livro){
            return res.status(404).json({ error: `O filme com o id: ${id} não existe.`})
        }
        await LivroModel.deleteOne({_id: id});

        return res.status(200).json(`Livro ${livro.titulo} exluido com sucesso!`);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

export async function patchLivro(req: Request, res: Response){
    try{
        const id = req.params.id;
        const data = req.body;
        const livro = await LivroModel.findById(id);
        if(!livro){
            return res.status(404).json({ error: `O filme com o id: ${id} não existe.`})
        }

        await LivroModel.updateOne({_id: id}, data);
        
        return res.status(200).json(data);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}
export async function updateLivro(req: Request, res: Response){
    try{
        const id = req.params.id;
        const data = req.body;
        const livro = await LivroModel.findById(id);
        if(!livro){
            return res.status(404).json({ error: `O filme com o id: ${id} não existe.`})
        }

        await LivroModel.updateMany({_id: id}, data);
        
        return res.status(200).json(data);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}