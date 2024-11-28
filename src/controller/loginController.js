import express from "express";
import loginModel from "../model/loginModel.js"
import { createTokenJWT } from "../middleware/jwt.js";

const routes = express.Router();

routes.post("/", async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    return res.send({ message: "Informe email e senha" });
  }

  if (!mail.includes("@")) {
    return res.send({ message: "Informe um email válido" });
  }

  try {
    const user = await loginModel.verifyUser(mail, password);

    if (user === null) {
      return res.send({ message: "E-mail ou senha invalida" });
    }

    const {id, nome, email, senha, departamento, tipo} = user

    const token = createTokenJWT(id, nome, email, senha, departamento, tipo)

    return res.status(200).send({message: token})
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao buscar usuário" });
  }
});

export default routes;
