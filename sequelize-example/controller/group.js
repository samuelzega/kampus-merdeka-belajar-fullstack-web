const {Groups} = require('../models')

module.exports = class {
    static addGroup(req, res, next) {
        Groups.create({
            title: req.body.title,
            SubjectId: req.body.SubjectId,
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New Group created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllGroup(req, res, next) {
        Groups.findAll()
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