module.exports = function (req, res, next) {
    const body = req.body
    req.userlogin = {
        ...body,
        hobby: 'ngoding'
    }
    // if (data == null) {
    //     res.status(400).send({
    //         message: 'data kurang lengkap'
    //     })
    // }
    next()
}