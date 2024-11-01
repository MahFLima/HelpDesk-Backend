import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users
}

async function verifyEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  console.log(user);
  return user;
}

async function createUser(nome, email, senha, departamento, tipo) {
  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha,
      departamento,
      tipo
    },
  });
  console.log(user);

  return user
}

async function deleteUser(id){
  const deleteUser = await prisma.user.delete({
    where: {
      id
    },
  })

  return deleteUser
}

export default {getUsers, verifyEmail, createUser, deleteUser}