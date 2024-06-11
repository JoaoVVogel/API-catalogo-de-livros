import {body} from "express-validator";

export const livroCreateValidation = () =>{
    return [
        body("titulo")
        .isString()
        .withMessage("O Titulo é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O Titulo não pode estar em branco!"),

        body("autor")
        .isString()
        .withMessage("O autor é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O campo autor não pode estar em branco!"),

        body("editora")
        .isString()
        .withMessage("Editora é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O campo editora não pode estar em branco!"),

        body("genero")
        .isString()
        .withMessage("O genero é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O campo genero não pode estar em branco!"),

        body("numeroDePaginas")
        .isNumeric()
        .withMessage("O numero de páginas é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O campo autor não pode estar em branco!"),

        body("preco")
        .isNumeric()
        .withMessage("O preço é um campo obrigatorio!")
        .isLength({ min: 1 })
        .withMessage("O campo preço não pode estar em branco!")
        .custom((value: number) => {
            if(value <= 0){
                throw new Error("O valor não pode ser menor ou igual a zero!")
            }
            return true;
        })
    ];
}