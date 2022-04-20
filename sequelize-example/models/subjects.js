'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Subjects extends Model {}
  Subjects.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
  });
  Subjects.associate = function (models) {
    Subjects.hasMany(models.Groups, {foreignKey: 'id'})
    Subjects.belongsToMany(models.Students , {through: 'StudentSubjects'})
  }
  return Subjects;
};