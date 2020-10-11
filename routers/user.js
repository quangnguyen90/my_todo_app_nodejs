const express = require("express");
var userController = require("../controllers/userController");
var router = express.Router();
var authMiddlewares = require("../middlewares/auth");

router.get("/", userController.getAllUserController);
router.get("/check-user", userController.checkUser);
router.get("/:id", userController.getDetailUserController);
router.post("/", authMiddlewares.checkUser, userController.signUpController);
router.delete("/:id", userController.deleteUserController);
router.put("/:id", userController.updateUserController);
router.post("/login", userController.loginController);

module.exports = router;
