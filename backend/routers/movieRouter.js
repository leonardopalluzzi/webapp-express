const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const adminCheck = require('../middlewares/adminCheck')
const authorization = require('../middlewares/authorization')

router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', adminCheck, movieController.store)

router.put('/', adminCheck, movieController.update)

router.patch('/:id', authorization, adminCheck, movieController.modify)

router.delete('/:id', authorization, adminCheck, movieController.destroy)

module.exports = router