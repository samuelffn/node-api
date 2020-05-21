const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Hello Samuel!");
});
app.listen(3001);