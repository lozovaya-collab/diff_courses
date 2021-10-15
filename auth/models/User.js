// создаем схему того как будут выглядеть наши сущности (в данном случае, сущность - пользователь)
// в базе данных
const { Schema, model } = require('mongoose')

// схема нашего пользователя
// id пользователя можно не указывать, он создатся автоматически
// в нашем слуае, сущность пользователь ссылается на другую сущность - роль
const User = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }] // ref - ссылка на схему в сущности в этой же базе данных
})

// теперь экспортируем модель, которая создается на основе схемы User ***model('name of model', shema)***
module.exports = model('User', User)