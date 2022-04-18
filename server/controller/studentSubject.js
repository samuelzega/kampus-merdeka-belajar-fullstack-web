const { StudentSubjects, Subjects, Students } = require('../models')

module.exports = class {
    static addStudentSubject(req, res, next) {
        StudentSubjects.create({
            StudentId: req.body.studentId,
            SubjectId: req.body.subjectId,
        })
            .then((result) => {
                // console.log(result, '========');
                res.status(201).send({
                    status: 201,
                    message: 'New subject created!',
                    data: result,
                })
            })
            .catch((err) => {
                // console.log(err, '=========');
                res.status(500).send(err)
            })
    } 

    static getAllStudentSubject(req, res, next) {
        StudentSubjects.findAll({
            where: {},
            include: [{model: Students}, {model: Subjects}]
        })
            .then((result) => {
                // console.log(result, '========');
                res.status(201).send({
                    status: 201,
                    message: 'New subject created!',
                    data: result,
                })
            })
            .catch((err) => {
                // console.log(err, '=========');
                res.status(500).send(err)
            })
    } 
    
}
