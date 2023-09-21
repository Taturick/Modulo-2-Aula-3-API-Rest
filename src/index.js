const express = require("express");
const rotas = require('./rotas')

const app = express();

app.use(express.json());

app.use(rotas)

app.listen(3000, (req, res) => {
  console.log("Servidor local rodando no http://localhost:3000/");
});
