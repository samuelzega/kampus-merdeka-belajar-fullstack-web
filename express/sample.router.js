const express = require('express')
const app = express()
const setUserlogin = require('../middleware/setName')


app.get('/', (req, res) => {
    // console.log(req.query)
    res.render('index', {
        name: req.query.name || 'world'
    })
})
app.get('/home', (req, res) => {
    // console.log(req.query)
    res.render('home', {
        name: req.query.name || 'home'
    })
})

app.get('/getname/:name', (req, res) => {
    console.log(req.params)
    res.status(200).send(`hello ${req.params.name}`)
})

app.post('/login', setUserlogin,  (req, res) => {
    res.status(200).send({
        status: 200,
        message: `Congrats ${req.body.name}, you are logged in now!`,
        data: req.userlogin
    })
})

app.get('/api/books', (req,res) => {
    res.status(200).send(`Kamu sedang mencari buku yang ditulis oleh ${req.query.author}`)
})
app.get('/api/v1/books/:id', (req,res) => {
    res.status(200).send(`Kamu sedang mencari buku dengan id ${req.params.id}`)
})

module.exports = app