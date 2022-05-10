const { response } = require('express')
const StudentRepository = require('../repository/student')

module.exports = class {
    static async findAll() {
        try {
            const repononse = StudentRepository.findAll()
            if (!response) {
                StudentRepository.findAllQuery()
            }
        } catch (error) {
            throw error
        }
    }
    
}