const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authorization = require('../middlewares/authorization')
const upload = require('../middlewares/upload')

router.get('/', userController.index)

router.get('/:id', authorization, userController.show)

router.post('/register', upload.single('avatar'), userController.store)

router.post('/login', userController.login)

router.put('/:id', userController.update)

router.patch('/:id', userController.modify)

router.delete('/:id', userController.destroy)

module.exports = router