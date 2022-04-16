'use strict'

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Groups extends Model {}
    Groups.init(
        {
            title: DataTypes.STRING,
            SubjectId: DataTypes.INTEGER,
        },
        {
            sequelize,
        }
    )
    Groups.associate = function(models) {
      Groups.hasMany(models.Subjects)
    }
    return Groups
}
