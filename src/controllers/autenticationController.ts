// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserInterface, userModel } from '../models/User';

const SECRET_KEY = process.env.SECRET_KEY as string;

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    try {
        const user: UserInterface | null = await userModel.findOne({ email });

        if (user && await user.compareSenha(senha)) {
            const accessToken = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ accessToken });
        } else {
            res.status(401).send('Email ou senha incorretos');
        }
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

export const register = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    try {
        const newUser = new userModel({ email, senha });
        await newUser.save();
        res.status(201).send('Usuário registrado');
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

export const protectedRoute = (req: Request, res: Response) => {
    res.send('Esta é uma rota protegida');
};
