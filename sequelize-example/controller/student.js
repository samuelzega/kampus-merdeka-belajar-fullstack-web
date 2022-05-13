const { Students, Groups } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('../helper/jwt')
const StudentService = require('../service/students')

module.exports = class {
    static async addStudent(req, res, next) {
        // const newPassword = await bcrypt.hash(req.body.password, 10)
        Students.create(req.body)
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New student created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllStudent(req, res, next) {

        Students.findAll({
            where: {...req.query},
            include: [{model: Groups}]
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

    static async login (req, res, next) {
        try {
            const student = await Students.findOne({where: {email: req.body.email}})
            if (!student) {
               res.status(404).send({
                status: 404,
                message: 'Student not found!',
               }) 
            }

            const isValidPassword = await bcrypt.compare(req.body.password, student.password)

            if (!isValidPassword) {
                res.status(404).send({
                    status: 400,
                    message: 'Email and password not match!',
                   }) 
            }
            // const token = jwt.generateToken({email: student.email, password: student.password})
            const secureStudent = student.dataValues
            // delete secureStudent.password
            req.session.isAuthenticated = true;
            req.session.user = secureStudent;

            res.status(200).send({
                status: 200,
                message: 'Student found!',
                data: {
                    user: secureStudent,
                    // token: token
                }
               }) 
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static async findAllStudentSample(req, res, next){
        try {
            const response = await StudentService.findAll()
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
