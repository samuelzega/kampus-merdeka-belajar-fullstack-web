const jwt = require('../helper/jwt')
const { Students } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const payload = jwt.verifyToken(req.headers.token)
        if (!payload) {
            res.status(404).send({ message: 'user not found' })
        }

        const student = await Students.findOne({
            where: { email: payload.email, password: payload.password },
        })
        if (!student) {
            res.status(404).send({ message: 'user not found' })
        } else if(student.dataValues.role == 'superadmin' || student.dataValues.role == 'admin ') {
            req.studentlogin = student.dataValues
            next()
        }else {
            res.status(403).send({message: 'user not authorized'})
        }
    } catch (err) {
        res.status(404).send({
            status: 404,
            message: 'User not found',
        })
    }
}
