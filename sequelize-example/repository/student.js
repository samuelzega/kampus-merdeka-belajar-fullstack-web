const { Students, Groups } = require('../models')

module.exports = class {
    static findAll() {
        return Students.findAll()
    }
    static findAllQuery() {
        return Students.query("SELECT * FROM `students`", { type: QueryTypes.SELECT })
    }
}