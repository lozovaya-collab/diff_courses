// для того, чтобы наше приложение прослушивалось разные http запросы - выполним подключение ROUTER
const Router = require('express')
const router = new Router()
const controller = require('./authController')

// post запросы - регистрация и авторизация
router.post('/registration', controller.registration)
router.post('/login', controller.login)

// get запрос - раздаем роли пользователям
router.get('/users', controller.getUsers)


// экспортируем, чтобы использовать
module.exports = router