const { Schema, model } = require('mongoose')

// схема роли пользователя
const Role = new Schema({
    role: { type: String, unique: true, default: 'USER' },
})

module.exports = model('Role', Role)