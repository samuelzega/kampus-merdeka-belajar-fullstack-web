'use strict'
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize
    class Students extends Model {}
    Students.init(
        {
            name: DataTypes.STRING,
            class: DataTypes.STRING,
            age: DataTypes.INTEGER,
            GroupId: DataTypes.INTEGER,
            password: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                isEmail: {
                    args: true,
                    msg: 'Email address already in use!'
                },
                
            },
        },
        {
            hooks: {
                beforeCreate : (record, options) => {
                    record.password = bcrypt.hashSync(record.password, 10)
                },
                afterCreate: (record) => {
                    console.log(record);
                }
            },
            sequelize
        }
    )
    Students.associate = function (models) {
      Students.belongsTo(models.Groups , {foreignKey: 'GroupId'})
      Students.belongsToMany(models.Subjects , {through: 'StudentSubjects'})
    }
    return Students
}
