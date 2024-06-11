import { Router, Request, Response } from "express";
import { createLivro, findLivrobyId, getAllLivros, patchLivro, removeLivro, updateLivro } from "../controllers/LivroControllers";
import { validate } from "../middleware/validation";
import { livroCreateValidation } from "../middleware/livroValidation";
import { userCreateValidation } from "../middleware/userValidation";
import { autenticateJWT } from "../middleware/autenticationMiddleware";
import { login, register } from "../controllers/autenticationController";
const router = Router();

export default router
.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API rodando");
})

.post("/livro", autenticateJWT, livroCreateValidation(), validate, createLivro)

.get("/livro/:id", autenticateJWT, findLivrobyId)

.get("/livro", autenticateJWT, getAllLivros)

.delete("/livro/:id", autenticateJWT, removeLivro)

.patch("/livro/:id", autenticateJWT, livroCreateValidation(), validate, patchLivro)

.put("/livro/:id", autenticateJWT, livroCreateValidation(), validate, updateLivro)

.post("/register", userCreateValidation(), register)

.post("/login", login)