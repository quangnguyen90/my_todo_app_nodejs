let userService = require('../services/userService');

function getAllUserController(req, res) {
    userService.getAllUser().then(function (data) {
        return res.json({
            error: false,
            status: 200,
            message: 'Get all user OK',
            data: data
        })
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Get all user fail'
        })
    })
}

function getDetailUserController(req, res) {
    userService.getDetailUser(req.params.id).then(function (data) {
        if (!data) {
            return res.json({
                error: false,
                status: 200,
                message: 'User not exist'
            })
        } else {
            return res.json({
                error: false,
                status: 200,
                message: 'Get detail user OK',
                data: data
            })
        }
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Get detail user fail'
        })
    })
}

function deleteUserController(req, res) {
    userService.deleteUser(req.params.id).then(function (data) {
        if (data.ok > 0) {
            return res.json({
                error: false,
                status: 200,
                message: 'Delete user OK'
            })
        } else {
            return res.json({
                error: false,
                status: 200,
                message: 'User not exist'
            })
        }
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Delete user fail'
        })
    })
}

function updateUserController(req, res) {
    let { username, email, password, age } = req.body;
    let { id } = req.params;
    userService.updateUser(id, email, username, password, age).then(function (data) {
        if (data.nModified > 0) {
            return res.json({
                error: false,
                status: 200,
                message: 'Update user OK'
            })
        } else {
            return res.json({
                error: false,
                status: 200,
                message: 'User not exist'
            })
        }
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Delete user fail'
        })
    })
}

function signUpController(req, res) {
    let { email, username, password } = req.body;
    userService.signUp(email, username, password).then(function () {
        return res.json({
            error: false,
            status: 200,
            message: 'Signup OK'
        })
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Signup fail'
        })
    })
}

function loginController(req, res) {
    let { email, password } = req.body;
    userService.login(email, password).then(function (data) {
        if (!data) {
            return res.json({
                error: false,
                status: 500,
                message: 'Wrong account'
            })
        } else {
            return res.json({
                error: false,
                status: 200,
                message: 'Login OK'
            })
        }
    }).catch(function () {
        return res.json({
            error: true,
            status: 500,
            message: 'Login fail'
        })
    })
}

module.exports = {
    signUpController,
    getAllUserController,
    getDetailUserController,
    deleteUserController,
    updateUserController,
    loginController
}