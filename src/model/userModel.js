import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
}

async function verifyEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  console.log(user);
  return user;
}

async function createUser(nome, email, senha, departamento, isAdmin = false) {
  // Criação do usuário
  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha,
      departamento,
      isAdmin, // Definindo se o usuário será um administrador
      userAdm: isAdmin // Se for admin, cria também o UserAdm
        ? {
            create: {
              email: email, // Gerando um email para o admin
            },
          }
        : undefined, // Se não for admin, não cria o UserAdm
    },
  });

  console.log(user);

  return user;
}

async function alterUser(userId, email) {
  const userPromovido = await prisma.user.update({
    where: { id: userId },
    data: {
      isAdmin: true, // Promovendo para administrador
      userAdm: {
        create: {
          // Criando o registro de UserAdm
          email: email, // Defina o email do administrador
        },
      },
    },
  });

  return userPromovido;
}

async function deleteUser(id) {
  const deleteUser = await prisma.user.delete({
    where: {
      id,
    },
  });

  return deleteUser;
}

export default { getUsers, verifyEmail, createUser, deleteUser, alterUser };
