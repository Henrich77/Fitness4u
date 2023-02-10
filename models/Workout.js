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
    body_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'body',
          key: 'id',
        },    
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  },
);

module.exports = Workout;