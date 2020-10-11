var userService = require("../services/userService");
async function checkUser(req, res, next) {
  var user = await userService.checkEmail(req.body.email);
  if (!user) {
    next();
  } else {
    return res.json({
      error: false,
      status: 400,
      message: "Account is existed",
    });
  }
}

module.exports = {
  checkUser,
};
