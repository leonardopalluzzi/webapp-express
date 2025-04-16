const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.index)

router.get('/:id', userController.show)

router.post('/register', userController.store)

router.post('/login', userController.login)

router.put('/:id', userController.update)

router.patch('/:id', userController.modify)

router.delete('/:id', userController.destroy)

module.exports = router