const { Groups } = require('../models')

module.exports = class {
    static addGroup(req, res, next) {
        Groups.create({
            title: req.body.title,
            SubjectId: req.body.subject
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
    
}
