const router = require('express').Router()
const controller = require('../controllers/user')

router.get('/', controller.findAll)
router.get('/:id', controller.findOne)
router.post('/', controller.create)
router.post('/login', controller.login)

module.exports = router