'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId'
      })
      this.belongsTo(models.Airplane, {
        foreignKey: 'departureAirportId'
      })
      this.belongsTo(models.Airplane, {
        foreignKey: 'arrivalAirportId'
      })
    }
  }
  Flight.init({
    flightNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    airplaneId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        table: 'Airplanes',
        field: 'id'
      },
      onDelete: 'CASCADE'
    },
    departureAirportId:{
      type:DataTypes.STRING,
      allowNull: false,
      references: {
        table: 'Airports',
        field: 'id'
      },
      onDelete: 'CASCADE'
    },
    arrivalAirportId:{
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        table: 'Airports',
        field: 'id'
      },
      onDelete: 'CASCADE'
    },
    arrivalTime:{
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardingGate:{
      type:DataTypes.STRING
    },
    totalSeats:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};