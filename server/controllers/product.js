const Product = require('../models/product')

class ProductController {
    static findAll(req, res) {
        Product
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static findOne(req, res) {
        Product
            .findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static update(req, res) {
        console.log('masuk')
        Product
            .update({ 
                _id: req.params.id 
            },{ 
                $set: req.body 
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static create(req, res) {
        let new_product = {
            name: req.body.name,
            price: req.body.price,
            image: req.file.cloudStoragePublicUrl,
            stock: req.body.stock
        }

        Product
            .create(new_product)
            .then((data) => {
                res.staus(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static delete(req, res) {
        Product
            .findByIdAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = ProductController