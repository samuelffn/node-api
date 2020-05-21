const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    
    // Listar todos
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    // Detalhar
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // Salvar
    async store(req, res) {
        const product = await Product.create(req.body); // req.body contém o json que enviamos na requisição
        return res.json(product); // Retorna o produto criado
    },

    // Atualizar
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // o new é para que ele retorne a informação atualizada
        return res.json(product);
    },

    // Excluir
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};


// EXEMPLOS PARA CHAMADA DOS ENDPOINTS NO POSTMAN

/*
Listar todos:
No Postman escolhe GET
URL: http://localhost:3001/api/products

Detalhar:
No Postman escolhe GET e após o nome da roda informa o ID na URL
URL: http://localhost:3001/api/products/5ec6bff5bed6e006a851f2e4

Salvar:
No Postman escolhe POST, em seguida marca Body, raw e JSON(application/json)
No área do boy add o json:
{
    "title": "Samuel França",
    "description": "Estudando NodeJs",
    "url": "https://github.com/samuelffn"
}
URL: http://localhost:3001/api/products

Atualizar:
No Postman escolhe PUT, em seguida marca Body, raw e JSON(application/json)
No área do boy add o json:
{
    "title": "Samuel Neto"
}
Após o nome da roda informa o ID na URL
URL: http://localhost:3001/api/products/5ec6bff5bed6e006a851f2e4

Excluir:
No Postman escolhe DELETE, em seguida NÃO marca Body e após o nome da roda informa o ID na URL
URL: http://localhost:3001/api/products/5ec6bff5bed6e006a851f2e4

*/