import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send("Hello World!").status(200);
})

export default routes