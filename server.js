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

const Product = mongoose.model("Product");

// Primeira rota
app.get("/", (req, res) => {
   Product.create({
       title: "Samuel França",
       description: "Estudando NodeJs",
       url: "https://github.com/samuelffn"
   });
   
   return res.send("Hello Samuel!");
});

// Setando a porta da aplicação
app.listen(3001);