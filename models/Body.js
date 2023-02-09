const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Body extends Model{}

Body.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      region_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'regions',
    }
  );
  
  module.exports = Body;
