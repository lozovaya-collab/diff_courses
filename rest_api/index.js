const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 3500;
const routes = require('./settings/routes');
routes(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`App listen on PORT = ${PORT}`);
});