const express = require("express");
var userController = require("../controllers/userController");
var router = express.Router();
var authMiddlewares = require("../middlewares/auth");

router.post("/login", userController.loginController);
router.post("/", authMiddlewares.checkUser, userController.signUpController);

router.use(authMiddlewares.checkAuth);
router.get("/", userController.getAllUserController);
router.get("/check-user", userController.checkUser);
router.get("/:id", userController.getDetailUserController);

router.use(authMiddlewares.checkAdmin);
router.delete("/:id", userController.deleteUserController);
router.put("/:id", userController.updateUserController);

module.exports = router;
