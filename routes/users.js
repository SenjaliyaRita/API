const express = require('express')
const router = express.Router()
const UserValidator = require('../Controller/Validator/userValidator')
const UserController = require('../Controller/userController')


router.post('/register', 
[
    UserValidator.addUserValidator,
    UserController.addUser
]
)

router.post('/login',UserController.login)
router.get('/list',UserController.getUserList)
module.exports = router