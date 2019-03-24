const router = require('express').Router()
const productController = require('../controllers/product')
const images = require('../helpers/image')

router.get('/', productController.findAll)
// router.post('/', images.multer.single('image'), images.sendUploadToGCS, productController.create)
router.get('/:id', productController.findOne)
router.put('/update/:id', productController.update)
router.delete('/delete/:id', productController.delete)

module.exports = router