'use strict'
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize
    class Students extends Model {}
    Students.init(
        {
            name: DataTypes.STRING,
            class: DataTypes.STRING,
            age: DataTypes.INTEGER,
            GroupId: DataTypes.INTEGER
        },
        {
            sequelize,
        }
    )
    Students.associate = function (models) {
      Students.belongsTo(models.Groups , {foreignKey: 'GroupId'})
      Students.belongsToMany(models.Subjects , {through: 'StudentSubjects'})
    }
    return Students
}
