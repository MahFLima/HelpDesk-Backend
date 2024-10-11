import express from "express";
import userModel from "../model/userModel.js";
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const users = await userModel.getUsers();
    if (users.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário cadastrado" }); // Mensagem caso não haja usuários
    }
    res.status(200).json(users); // Enviando a resposta com os usuários
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

routes.post("/", async (req, res) => {
  const { nome, email, senha, departamento, tipo } = req.body;

  if ((!nome || !email || !senha, !departamento || !tipo)) {
    return res.status(400).send({ message: "Complete o formulário" });
  }

  if (!email.includes("@")) {
    return res.status(400).send({ message: "Informe um email válido" });
  }

  const tipoUpper = tipo.toUpperCase();
  if (tipoUpper !== "ADMIN" && tipoUpper !== "USER") {
    return res
      .status(400)
      .send({ message: "Informe um tipo usuario válido(admin ou user)" });
  }

  if(senha.length < 7){
    return res.status(400).send({ message: "Senha muito curta" });
  }

  const verifyEmail = await userModel.verifyEmail(email);

  if (verifyEmail !== null) {
    return res.status(400).send({ message: "E-mail já cadastrado" });
  }

  try {
    const user = await userModel.createUser(
      nome,
      email,
      senha,
      departamento,
      tipo
    );
    res.status(201).send({message: "Usuario incluido"});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Erro ao criar usuário", error: error.message });
  }
});

export default routes;
