const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const adminCheck = require('../middlewares/adminCheck')
const authorization = require('../middlewares/authorization')
const upload = require('../middlewares/upload')



router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', adminCheck, upload.single('cover_image'), movieController.store)

router.put('/', adminCheck, movieController.update)

router.patch('/:id', authorization, adminCheck, upload.single('image'), movieController.modify)

router.delete('/:id', authorization, adminCheck, movieController.destroy)

module.exports = router