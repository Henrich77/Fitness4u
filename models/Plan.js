const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plan extends Model{}

Plan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_workout: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      second_workout: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_workout: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fourth_workout: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fifth_workout: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'plan',
    }
  );
  
  module.exports = Plan;
