const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o banco de dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Primeira rota
app.get('/', (req, res) => {
    res.send("Hello Samuel!");
});

// Setando a porta da aplicação
app.listen(3001);