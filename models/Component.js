const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Component extends Model{}

Component.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      component_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'component',
    }
  );
  
  module.exports = Component;
