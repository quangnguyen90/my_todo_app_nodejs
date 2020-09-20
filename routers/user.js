const express = require('express');
var { signUpController, getAllUserController, getDetailUserController, deleteUserController, updateUserController } = require('../controllers/userController');
var router = express.Router();

router.get('/', getAllUserController);
router.get('/:id', getDetailUserController);
router.post('/', signUpController);
router.delete('/:id', deleteUserController);
router.put('/:id', updateUserController);

module.exports = router;