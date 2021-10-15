const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

// DATABASE
const uri = `mongodb+srv://anyaloza:1234@cluster0.fiud6.mongodb.net/auth?retryWrites=true&w=majority`


app.use(express.json())

const start = () => {
    mongoose.connect(uri)
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

}

start()