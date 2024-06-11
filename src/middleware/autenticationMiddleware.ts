import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY as string;

export const autenticateJWT = (req: Request, res: Response, next: NextFunction) =>{
    const reqHeader = req.headers.authorization;

    if(reqHeader){
        const token = reqHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
            if(err){
                return res.sendStatus(403);
            }
            req.body.user = user;
            return next();

        });
    }
    if(!reqHeader){
        return res.sendStatus(401);
    }
};