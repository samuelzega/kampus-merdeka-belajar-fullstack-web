'use strict'

const Subjects = require('./subjects')
const Students = require('./students')
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize
    class StudentSubjects extends Model {}
    StudentSubjects.init(
        {
            SubjectId: {
              type: DataTypes.INTEGER,
              reference: {
                model: Subjects,
                key: Subjects.id
              }
            },
            StudentId: {
              type: DataTypes.INTEGER,
              reference: {
                model: Students,
                key: Students.id
              }
            },
        },
        {
            sequelize,
        }
    )
        StudentSubjects.associate = function (models) {
          StudentSubjects.belongsTo(models.Students)
          StudentSubjects.belongsTo(models.Subjects)
        }
    return StudentSubjects
}
