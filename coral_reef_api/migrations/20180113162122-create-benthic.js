'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('benthics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      MPA_name: {
        type: Sequelize.STRING
      },
      Site_ID: {
        type: Sequelize.INTEGER
      },
      Site_Name: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.INTEGER
      },
      Latitude: {
        type: Sequelize.FLOAT
      },
      Longitude: {
        type: Sequelize.FLOAT
      },
      Zone: {
        type: Sequelize.STRING
      },
      Percent.Coral: {
        type: Sequelize.FLOAT
      },
      SE.Coral: {
        type: Sequelize.FLOAT
      },
      Percent.SoftCoral: {
        type: Sequelize.FLOAT
      },
      SE.SoftCoral: {
        type: Sequelize.FLOAT
      },
      Percent.CCA: {
        type: Sequelize.FLOAT
      },
      Percent.Bleached: {
        type: Sequelize.FLOAT
      },
      SE.Bleached: {
        type: Sequelize.FLOAT
      },
      Percent.Rubble: {
        type: Sequelize.FLOAT
      },
      SE.Rubble: {
        type: Sequelize.FLOAT
      },
      Percent.OthAlgae: {
        type: Sequelize.FLOAT
      },
      SE.OthAlgae: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('benthics');
  }
};