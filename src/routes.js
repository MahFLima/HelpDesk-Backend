import express from 'express'
import testController from './controller/testController.js'
import userController from './controller/userController.js'

const routes = express()

routes.use('/', testController)
routes.use('/user', userController)

export default routes