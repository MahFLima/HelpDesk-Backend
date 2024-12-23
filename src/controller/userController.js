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
  const { nome, email, senha, departamento, isAdmin } = req.body;

  if ((!nome || !email || !senha, !departamento)) {
    return res.status(400).send({ message: "Complete o formulário" });
  }

  if (!email.includes("@")) {
    return res.status(400).send({ message: "Informe um email válido" });
  }

  if (senha.length < 7) {
    return res.status(400).send({ message: "Senha muito curta" });
  }

  const verifyEmail = await userModel.verifyEmail(email);

  if (verifyEmail !== null) {
    return res.status(400).send({ message: "E-mail já cadastrado" });
  }

  try {
    const user = await userModel.createUser(nome, email, senha, departamento);
    res.status(201).send({ message: "Usuario incluido" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Erro ao criar usuário", error: error.message });
  }
});

routes.put("/userAdm", async (req, res) => {
  const { email } = req.body;

  const verifyEmail = await userModel.verifyEmail(email);

  if (verifyEmail === null) {
    return res.status(400).send({ message: "E-mail invalido" });
  }

  try {
    const user = await userModel.alterUser(verifyEmail.id, email);
    res.status(201).send({ message: "Usuario incluido" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Erro ao criar usuário", error: error.message });
  }
});

routes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // res.send({message: parseInt(id)})
  await userModel.deleteUser(parseInt(id));
  res.status(200).send({ message: "usuario excluido" }); // Enviando a resposta com os usuários
});

export default routes;
