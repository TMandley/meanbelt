
const Product = require('../models/product.js')
const mongoose = require('mongoose');

module.exports = {
    index: function (req, res) {
        Product.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    findone: function (req, res) {
        Product.findOne({id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Product.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            });
    },
    edit: function (req, res) {
        Product.updateOne({id: req.params.id}, {
            $set: {name: req.body.name, price: req.body.price, quantity: req.body.quantity}
        }, {new: true, runValidators: true})
            .then(result => {
                console.log(result)
                res.json(result)
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Product.remove({id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
}