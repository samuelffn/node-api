const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    
    // Listar todos
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    // Detalhe
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