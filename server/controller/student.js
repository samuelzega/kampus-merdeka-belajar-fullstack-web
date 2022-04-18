const { Students, StudentSubject } = require('../models')

module.exports = class {
    static addStudent(req, res, next) {
        Students.create({
            name: req.body.name,
            class: req.body.class,
            age: req.body.age,
            GroupId: req.body.GroupId
        })
            .then((result) => {
                console.log(result)
                res.status(201).send({
                    status: 201,
                    message: 'New student created!',
                    data: result,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    static getallStudent(req, res, next) {
        Students.findAll()
            .then((result) => {
                console.log(result)
                res.status(200).send({
                    status: 200,
                    data: result,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
