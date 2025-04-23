const express = require('express')
const router = express.Router()
const treadsController = require('../controllers/threadsController')
const authorization = require('../middlewares/authorization')

router.get('/', treadsController.index)

router.get('/:id', treadsController.show)

router.post('/', authorization, treadsController.store)

router.put('/:id', treadsController.update)

router.patch('/:id', treadsController.modify)

router.delete('/:id', treadsController.destroy)

module.exports = router