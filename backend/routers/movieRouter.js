const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', movieController.store)

router.put('/', movieController.update)

router.patch('/', movieController.modify)

router.delete('/', movieController.destroy)

module.exports = router