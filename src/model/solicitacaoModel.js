import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getSolicitacoes(){
  const solicitacoes = await prisma.solicitacao.findMany()
  return solicitacoes
}

async function getSolicitacoesByUser(user_id) {
  const solicitacoes = await prisma.solicitacao.findMany({
    where: {
      user_id
    },
  });
  return solicitacoes;
}

async function getSolicitacoesById(id) {
  const solicitacoes = await prisma.solicitacao.findMany({
    where: {
      id
    },
  });
  return solicitacoes;
}

async function createSolicitacao(numero_patrimonio, descricao_problema, user_id){
  const novaSolicitacao = await prisma.solicitacao.create({
    data: {
      numero_patrimonio,
      descricao_problema,
      user_id  
    }
  });

  return novaSolicitacao 
}

async function deleteSolicitacao(id){
  const deleteSolicitation = await prisma.solicitacao.delete({
    where: {
      id
    },
  })

  return deleteSolicitation
}

export default {getSolicitacoes, createSolicitacao, getSolicitacoesByUser, getSolicitacoesById, deleteSolicitacao}