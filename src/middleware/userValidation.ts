import { body } from "express-validator";

export const userCreateValidation = () => {
    return [
        body("email")
        .isString()
        .withMessage("O email é um campo obrigatorio!")
        .isLength({min: 1})
        .withMessage("O campo email não pode ficar em branco!"),
        
        body("senha")
        .isString()
        .withMessage("A senha é um campo obrigatorio!")
        .isLength({min: 1})
        .withMessage("O campo senha não pode ficar em branco!")

    ]
}