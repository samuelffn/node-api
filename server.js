const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o banco de dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Para registrar nosso model Product na aplicação
//require("src/models/Product");  // Registrado cada model por vez
requireDir("src/models"); // Registrando todos os models

//const Product = mongoose.model("Product");

// Rotas
app.use("/api", require("./src/routes")); // Vai receber todo tipo de requisição

// Setando a porta da aplicação
app.listen(3001);