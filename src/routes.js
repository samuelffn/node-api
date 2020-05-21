const express = require('express');
const routes = express.Router();


routes.get("/", (req, res) => {
    /* Product.create({
        title: "Samuel França",
        description: "Estudando NodeJs",
        url: "https://github.com/samuelffn"
    });
 */    
    return res.send("Hello Samuel!");
 });

 module.exports = routes;