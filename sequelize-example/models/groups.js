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
    Groups.associate = function (models) {
      Groups.belongsTo(models.Subjects , {foreignKey: 'SubjectId'})
      Groups.hasMany(models.Students , {foreignKey: 'id'})
    }
    return Groups
}
