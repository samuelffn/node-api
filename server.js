const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App
const app = express();
app.use(express.json()); // Para permitir que sejam enviados dados para aplicação no formato json
app.use(cors()); // Dentro do parâmtro do cors podem ser definidos quais domínio teremos acesso e outras questões de segurança. Com ele vazio, como está, libera acesso para todos os domínios.

// Iniciando o banco de dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Para registrar nosso model Product na aplicação
//require("src/models/Product");  // Registrado cada model por vez
requireDir("src/models"); // Registrando todos os models

// Rotas
app.use("/api", require("./src/routes")); // Vai receber todo tipo de requisição

// Setando a porta da aplicação
app.listen(3001);