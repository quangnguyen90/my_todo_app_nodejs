let UserModel = require("../models/userModel");
function signUp(email, username, password) {
    return UserModel.create({
        email, username, password
    })
}

function getAllUser() {
    return UserModel.find({});
}

function getDetailUser(id) {
    return UserModel.findOne({ _id: id });
}

function updateUser(id, email, username, password, age) {
    let newUser = {};
    if (email) newUser.email = email;
    if (username) newUser.username = username;
    if (password) newUser.password = password;
    if (age) newUser.age = age;

    return UserModel.updateOne({ _id: id }, newUser)
}

function deleteUser(id) {
    return UserModel.deleteOne({ _id: id });
}

module.exports = {
    signUp,
    getAllUser,
    getDetailUser,
    updateUser,
    deleteUser
}