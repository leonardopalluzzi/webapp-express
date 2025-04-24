const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messagesController')
const authorization = require('../middlewares/authorization')

router.get('/', messagesController.index)

router.get('/:id', messagesController.show)

router.post('/', authorization, messagesController.store)

router.put('/:id', messagesController.update)

router.patch('/:id', messagesController.modify)

router.delete('/:id', messagesController.destroy)

module.exports = router