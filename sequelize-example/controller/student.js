const { Students, Groups } = require('../models')

module.exports = class {
    static addStudent(req, res, next) {
        Students.create({
            name: req.body.name,
            class: req.body.class,
            age: req.body.age,
            GroupId: req.body.GroupId,
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New student created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllStudent(req, res, next) {

        Students.findAll({
            where: {...req.query},
            include: [{model: Groups}]
        })
            .then((result) => {
                res.status(200).send({
                    status: 200,
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }
}
