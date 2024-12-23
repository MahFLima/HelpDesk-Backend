import express from 'express'
import testController from './controller/testController.js'
import userController from './controller/userController.js'
import loginController from './controller/loginController.js'
import solicitacaoController from './controller/solicitacaoController.js'

const routes = express()

routes.use('/', testController)
routes.use('/user', userController)
routes.use('/login', loginController)
routes.use('/solicitacao', solicitacaoController)

export default routes