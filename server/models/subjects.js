'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Subjects extends Model {}
    Subjects.init(
        {
            title: DataTypes.STRING,
            desc: DataTypes.STRING,
            duration: DataTypes.STRING,
        },
        { sequelize }
    )
    Subjects.associate = function(models) {
      Subjects.belongsToMany(models.Students, { through: 'StudentSubjects' })
      Subjects.hasMany(models.Groups, {foreignKey: 'id'})
    }
    return Subjects
}
