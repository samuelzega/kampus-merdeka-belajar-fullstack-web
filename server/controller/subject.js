const { Subjects } = require('../models')

module.exports = class {
    static addSubject(req, res, next) {
        Subjects.create({
            title: req.body.title,
            desc: req.body.desc,
            duration: req.body.duration,
            GroupId: 1
        })
            .then((result) => {
                console.log(result)
                res.status(201).send({
                    status: 201,
                    message: 'New subject created!',
                    data: result,
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    } 
    
}
