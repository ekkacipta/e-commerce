process.env.NODE_ENV = 'test'

const chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp)
let id = null

describe('/GET users', function () {
    it('should return an array and status 200', function (done) {
        chai.request(app)
            .get('/users')
            .then((response) => {
                response.should.have.status(200)
                response.body.should.be.an('array')
                done()
            })
            .catch((err) => {
                // console.log(err);
                done()
            })
    })
})

describe('/POST users', function () {
    describe('success', function () {
        it('should return an object and status 201', function (done) {
            let users = {
                name: "valen",
                email: "valen@mail.com",
                password: "Makantail0"
            }
            chai.request(app)
                .post('/users')
                .send(users)
                .then((response) => {
                    response.should.have.status(201)
                    response.body.should.be.an('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('name')
                    response.body.should.have.property('email')
                    response.body.should.have.property('password')
                    id = response.body._id
                    done()
                })
                .catch((err) => {
                    // console.log(err.message)
                    done()
                })
        })  
    })
    describe('error', function () {
        it('should return an error and status 400', function (done) {
            let users = {
                name: "valen",
                email: "valen@mail.com",
                password: "Makantail0"
            }
            chai.request(app)
                .post('/users')
                .send(users)
                .then((response) => {
                    response.should.have.status(400)
                    done()
                })
                .catch((err) => {
                    // console.log(err);
                    done()
                })
        })
    })
})

describe('/GET/:id', function () {
    describe('success' , function () {
        it('should return an object and status 200', function (done) {
            chai.request(app)
                .get(`/users/${id}`)
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
    })
    describe('error', function () {
        it('should return error and status 400', function (done) {
            chai.request(app)
                .get(`/users/${id}`)
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