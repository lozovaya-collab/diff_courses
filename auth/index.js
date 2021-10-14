const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://anyaloza:1234@cluster0.otpao.mongodb.net/auth_app?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()