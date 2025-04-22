const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const adminCheck = require('../middlewares/adminCheck')

router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', adminCheck, movieController.store)

router.put('/', adminCheck, movieController.update)

router.patch('/:id', adminCheck, movieController.modify)

router.delete('/', adminCheck, movieController.destroy)

module.exports = router