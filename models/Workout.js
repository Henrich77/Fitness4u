const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // region_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'region',
    //       key: 'id',
    //     },    
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  },
);

module.exports = Workout;