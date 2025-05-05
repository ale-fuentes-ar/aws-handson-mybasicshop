const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

// endpoints for my shop
app.get('/api/products', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'products.json'));
    res.json(JSON.parse(data));
});

app.get('/api/products/:id', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'products.json'));
    const products = JSON.parse(data);
    const product = products.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).json({error: 'Product no found !'});
    res.json(product);
});

// start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend listen on http://localhost:${PORT}`);
})
