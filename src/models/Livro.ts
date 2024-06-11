import {model, Schema} from "mongoose";

const livroSchema = new Schema(
    {
        titulo:  {type: String},
        autor: {type: String},
        editora: {type: String},
        genero: {type: String},
        numeroDePaginas: {type: Number},
        preco: {type: Number}
    },
    {
        timestamps: true,
    }
);

export const LivroModel = model("Livro", livroSchema);