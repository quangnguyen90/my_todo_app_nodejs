let userService = require("../services/userService");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const SALT_ROUND = 10;

function getAllUserController(req, res) {
  userService
    .getAllUser()
    .then(function (data) {
      return res.json({
        error: false,
        status: 200,
        message: "Get all user OK",
        data: data,
      });
    })
    .catch(function () {
      return res.json({
        error: true,
        status: 500,
        message: "Get all user fail",
      });
    });
}

function getDetailUserController(req, res) {
  userService
    .getDetailUser(req.params.id)
    .then(function (data) {
      if (!data) {
        return res.json({
          error: false,
          status: 200,
          message: "User not exist",
        });
      } else {
        return res.json({
          error: false,
          status: 200,
          message: "Get detail user OK",
          data: data,
        });
      }
    })
    .catch(function () {
      return res.json({
        error: true,
        status: 500,
        message: "Get detail user fail",
      });
    });
}

function deleteUserController(req, res) {
  userService
    .deleteUser(req.params.id)
    .then(function (data) {
      if (data.ok > 0) {
        return res.json({
          error: false,
          status: 200,
          message: "Delete user OK",
        });
      } else {
        return res.json({
          error: false,
          status: 200,
          message: "User not exist",
        });
      }
    })
    .catch(function () {
      return res.json({
        error: true,
        status: 500,
        message: "Delete user fail",
      });
    });
}

function updateUserController(req, res) {
  let { username, email, password, age } = req.body;
  let { id } = req.params;
  userService
    .updateUser(id, email, username, password, age)
    .then(function (data) {
      if (data.nModified > 0) {
        return res.json({
          error: false,
          status: 200,
          message: "Update user OK",
        });
      } else {
        return res.json({
          error: false,
          status: 200,
          message: "User not exist",
        });
      }
    })
    .catch(function () {
      return res.json({
        error: true,
        status: 500,
        message: "Delete user fail",
      });
    });
}

function signUpController(req, res) {
  let { email, username, password } = req.body;
  bcrypt.genSalt(SALT_ROUND, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      userService
        .signUp(email, username, hash)
        .then(function () {
          return res.json({
            error: false,
            status: 200,
            message: "Signup OK",
          });
        })
        .catch(function () {
          return res.json({
            error: true,
            status: 500,
            message: "Signup fail",
          });
        });
    });
  });
}

function loginController(req, res) {
  let { email, password } = req.body;
  userService
    .checkEmail(email)
    .then(function (user) {
      if (!user) {
        return res.json({
          error: false,
          status: 500,
          message: "Email or Password is incorrect",
        });
      }

      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            algorithm: "HS512",
            expiresIn: "1d",
          });
          res.cookie("token", token, { maxAge: 60 * 60 * 1000 * 24 * 1 });
          return res.json({
            error: false,
            status: 200,
            message: "Login OK",
            token: token,
          });
        }
        return res.json({
          error: true,
          status: 500,
          message: "Login fail",
        });
      });
    })
    .catch(function () {
      return res.json({
        error: false,
        status: 500,
        message: "Email or Password is incorrect",
      });
    });
}

function checkUser(req, res) {
  try {
    // let token =
    // req.body.token || req.headers.authorization.trim().split("Bearer ")[1];
    let token =
      req.cookies.token || req.headers.authorization.trim().split("Bearer ")[1];
    let decodeUser = jwt.verify(token, process.env.JWT_SECRET);
    res.json(decodeUser);
  } catch (error) {
    res.json({
      error: false,
      status: 500,
      message: "Internal server error",
    });
  }
}

module.exports = {
  signUpController,
  getAllUserController,
  getDetailUserController,
  deleteUserController,
  updateUserController,
  loginController,
  checkUser,
};
