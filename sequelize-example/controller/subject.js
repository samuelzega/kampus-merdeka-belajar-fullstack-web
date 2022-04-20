const {Subjects} = require('../models')

module.exports = class {
    static addSubject(req, res, next) {
        Subjects.create({
            title: req.body.title,
            desc: req.body.desc,
            duration: req.body.duration,
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New Subject created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllSubject(req, res, next) {
        Subjects.findAll()
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