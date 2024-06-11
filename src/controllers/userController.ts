import { Request, Response } from "express";
import { userModel } from "../models/User";
import Logger from "../../config/logger";

export async function createUser(req: Request, res: Response) {
    try{
        const data = req.body;
        const user = await userModel.create(data);
        return res.status(201).send(user);
    }catch(e: any){
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

export async function getAllUsers(req: Request, res: Response) {
    try{
        const users = await userModel.find();
        return res.status(201).send(users);
    }catch(e: any){
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}
