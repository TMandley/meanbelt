//EDIT PATH!
const products = require('../controllers/products.js')

module.exports = function (app) {
    app.get('/api/products', (req, res) => {
        products.index(req,res)
    });
    app.get('/api/products/:id', (req, res) => {
        products.findone(req,res);
    });
    app.post('/api/products', (req, res) => {
        products.create(req, res);
    });
    app.put('/api/products/:id', (req, res) => {
        products.edit(req, res);
    });
    app.delete('/api/products/:id', (req, res) => {
        products.delete(req, res);
    });
}