const {StudentSubjects, Students, Subjects} = require('../models')

module.exports = class {
    static addStudentSubject(req, res, next) {
        StudentSubjects.create({
            SubjectId: req.body.SubjectId,
            StudentId: req.body.StudentId,
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New StudentSubject created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllStudentSubject(req, res, next) {
        StudentSubjects.findAll({
            where: {},
            include: [{model: Students}]
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