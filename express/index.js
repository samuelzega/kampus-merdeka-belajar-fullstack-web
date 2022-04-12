const { query } = require('express')
const express = require('express')
const app = express()
const setUserlogin = require('./middleware/setName')
const port = 3000
const router = require('./router')

const handleError = (req, res) => {
    res.status(404).send({
        status: 404,
        message: 'not found'
    })
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(router)
app.use(handleError)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
