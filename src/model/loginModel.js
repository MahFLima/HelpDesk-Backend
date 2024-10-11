import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function verifyUser(email, senha) {
  const user = await prisma.user.findUnique({
    where: { email, senha },
  });
  console.log(user);
  return user;
}

export default { verifyUser }