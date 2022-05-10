const { Students } = require('../models')

module.exports = async (req, res, next) => {
    try {
       res.status(200).send(req.session.user)
    } catch (err) {
        res.status(404).send({
            status: 404,
            message: 'User not found',
        })
    }
}
