const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 5000
const app = express()

// DATABASE
const uri = `mongodb+srv://anyalozovaya:qwerty123456789@cluster0.u9vwy.mongodb.net/app_auth?retryWrites=true&w=majority`

app.use(express.json())
app.use('/auth', authRouter)

const start = async() => {

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(
            console.log('aaaa')
        )
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))


}

start()