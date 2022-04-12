const fs = require('fs')

const login = (req, res) => {
    const rawdata = fs.readFileSync('./data/users.json')
    let users = JSON.parse(rawdata);
    const loginUser = users.find(el => el.name === req.body.name)
    if (loginUser) {
        res.status(200).send({
            status: 200,
            data: loginUser
        })
    }else {
        res.status(404).send({
            status: 404,
            message: 'user not found!',
        }) 
    }

}

const register = (req, res) => {
    const rawdata = fs.readFileSync('./data/users.json')
    let users = JSON.parse(rawdata);
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === req.body.name) {
            return res.status(401).send({
                status: 401,
                message: 'user already exist!',
            })
            
        }
    }
    const newUsers = [...users, req.body]
    fs.writeFileSync('./data/users.json', JSON.stringify(newUsers))
    res.status(201).send({
        status: 201,
        message: 'add new user success!',
        data: req.body
    })
}

module.exports = {
    login,
    register
}