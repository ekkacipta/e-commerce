const chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    chaiHttp = require('chai-http'),
    Product = require('../models/product')

const app = require('../app')

chai.use(chaiHttp)
let id = null 

describe('/GET product', function () {
    describe('success', function () {
        it('should return an array and status 200', function (done) {
            chai.request(app)
                .get('/products')
                .then((response) => {
                    response.should.have.status(200)
                    response.body.should.be.an('array')
                    done()
                })
                .catch((err) => {
                    // console.log(err)
                    done()
                })
        })
    })
    describe('error', function () {
        it('should return an error and status 400', function (done) {
            chai.request(app)
                .get('/product')
                .then((response) => {
                    response.should.have.status(400)
                    done()
                })
                .catch((err) => {
                    // console.log(err)
                    done()
                })
        })
    })
})

describe('/:id product', function () {
    describe('success', function () {
        it('should get a single product', function (done) {
            let id = 1
            chai.request(app)
                .get(`/${id}`)
                .then((response) => {
                    response.should.have.status(200)
                    response.body.should.be.an('object')
                    done()
                })
                .catch((err) => {
                    done()
                })
        })
    })

    describe('error', function () {
        it('should return an error and status 400', function (done) {
            let id = 1
            chai.request(app)
                .get(`/${id}`)
                .then((response) => {
                    response.should.have.status(400)
                    done()
                })
                .catch((err) => {
                    // console.log(err)
                    done()
                })
        })
    })
})

describe('/PUT/:id product', function () {
    describe('success', function () {
        it('should update a product given an id', function (done) {
            let product = new Product({
                name: 'tes',
                price: '10000',
                image: 'tes',
                stock: '100'
            })
            product.save()
                .then(() => {
                    chai.request(app)
                        .put('/prducts/' + product.id)
                        .send({
                            name: 'tes',
                            price: '20000',
                            image: 'tes',
                            stock: '100'
                        })
                        .then((response) => {
                            response.should.have.status(200)
                            response.body.should.be.an('object')
                            done()
                        })
                        .catch((err) => {
                            done()
                        })
                })
                .catch((err) => {
                    done()
                })
        })
    })
    describe('error', function () {
        it('should return an error', function (done) {
            let product = new Product({
                name: 'tes',
                price: '10000',
                image: 'tes',
                stock: '100'
            })
            product.save()
                .then(() => {
                    chai.request(app)
                        .put('/prducts/' + product.id)
                        .send({
                            name: 'tes',
                            price: '20000',
                            image: 'tes',
                            stock: '100'
                        })
                        .then((response) => {
                            response.should.have.status(400)
                            done()
                        })
                        .catch((err) => {
                            done()
                        })
                })
                .catch((err) => {
                    done()
                })
        })
    })
})

describe('/DELETE/:id product', function () {
    describe('success', function () {
        it('should delete product given an id', function (done) {
            let product = new Product({
                name: 'tes',
                price: '10000',
                image: 'tes',
                stock: '100'
            })
            product.save()
                .then(() => {
                    chai.request(app)
                        .delete('/delete/' + product.id)
                        .then((response) => {
                            response.should.have.status(200)
                            response.body.should.be.an('object')
                            done()
                        })
                        .catch((err) => {
                            // console.log(err)
                            done()
                        })
                })
                .catch((err) => {
                    // console.log(err)
                    done()
                })
        })
    })
})

describe('/POST product', function () {
    describe('success', function () {
        it('should return an object and status 201', function (done) {
            let product = {
                name: 'apa',
                price: 'berapa',
                image: 'gambar apa',
                stock: 'brp banyak'
            }
            chai.request(app)
                .post('/products')
                .send(product)
                .then((response) => {
                    response.should.have.status(201)
                    response.body.should.be.an('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('name')
                    response.body.should.have.property('price')
                    response.body.should.have.property('image')
                    response.body.should.have.property('stock')
                    done()
                })
                .catch((err) => {
                    done()
                })
        })
    })

    describe('error', function () {
        it('should return an error and status 400', function (done) {
            let product = {
                name: 'apa',
                price: 'berapa',
                image: 'gambar apa',
                stock: 'brp banyak'
            }
            chai.request(app)
                .post('/products')
                .send(product)
                .then((response) => {
                    response.should.have.status(400)
                    done()
                })
                .catch((err) => {
                    done()
                })
        })
    })
})