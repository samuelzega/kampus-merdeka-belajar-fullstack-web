const { Students, StudentSubject } = require('../models')

module.exports = class {
    static async addStudent(req, res, next) {
        try {
            const response = await Students.create({
                name: req.body.name,
                class: req.body.class,
                age: req.body.age,
                GroupId: req.body.GroupId
            })
            
            res.status(201).send({
                status: 201,
                message: 'New student created!',
                data: response,
            })
        } catch (error) {
            res.status(500).send(error)
        }
            
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
                console.log(err);
                res.status(500).send(err)
            })
    }
}
