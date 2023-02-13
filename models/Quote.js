const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quote extends Model{}

Quote.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quote: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'quote',
    },
  );
  
  module.exports = Quote;