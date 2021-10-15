const User = require('./models/User')
const Role = require('./models/Role')

// тут описываем все функции для взаимодействия с пользователем - регистрация, авторизация и получение пользователей
class authController {

    // регистрация
    async registration(req, res) {
        try {} catch (e) {
            console.log('Error: ', e);
        }
    }

    // авторизация
    async login(req, res) {
        try {} catch (e) {
            console.log('Error: ', e);
        }
    }

    // получение пользователей
    async getUsers(req, res) {
        try {
            const userRole = new Role()
            const adminRole = new Role({ value: 'ADMIN' })
            res.json('server works')
        } catch (e) {
            console.log('Error: ', e);
        }
    }
}

// теперь экспортируем обьект данного класс
module.exports = new authController()