const express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();

router.get('/', userController.getAllUserController);
router.get('/:id', userController.getDetailUserController);
router.post('/', userController.signUpController);
router.delete('/:id', userController.deleteUserController);
router.put('/:id', userController.updateUserController);
router.post('/login', userController.loginController);

module.exports = router;