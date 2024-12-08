import express from "express";
import solicitacaoModel from "../model/solicitacaoModel.js";
const routes = express.Router();

routes.get('/', async (req, res) => {
  try{
    const solicitacoes = await solicitacaoModel.getSolicitacoes()
    if(solicitacoes.length === 0){
      return res.status(404).send({
        message: 'Nenhuma solicitação cadastrada'
      })
    }
    res.status(200).send({message: solicitacoes})
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar solicitações" });
  }
})

routes.get('/user/:id', async (req, res) => {
  const {id} = req.params;
  try{
    const solicitacoes = await solicitacaoModel.getSolicitacoesByUser(parseInt(id))
    if(solicitacoes.length === 0){
      return res.status(404).send({
        message: 'Nenhuma solicitação cadastrada'
      })
    }
    res.status(200).send({message: solicitacoes})
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar solicitações" });
  }
})

routes.get('/:id', async (req, res) => {
  const {id} = req.params;
  try{
    const solicitacoes = await solicitacaoModel.getSolicitacoesById(parseInt(id))
    if(solicitacoes.length === 0){
      return res.status(404).send({
        message: 'Nenhuma solicitação cadastrada'
      })
    }
    res.status(200).send({message: solicitacoes})
  } catch(err){
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar solicitações" });
  }
})

routes.post('/', async (req, res) => {
  const {
    numero_patrimonio,
    descricao_problema,
    user_id
  } = req.body;

  if(!numero_patrimonio || !descricao_problema || !user_id) {
    return res.status(404).send({ message: 'Complete o formulario'})
  }

  try{
    const solicitacao = await solicitacaoModel.createSolicitacao(numero_patrimonio, descricao_problema, user_id)
    res.status(201).send({ message: "Solicitação incluida" });
  } catch(e){
    console.error(e);
    res
      .status(500)
      .send({ message: "Erro ao criar solicitação", e: e.message });
  }
})

export default routes;