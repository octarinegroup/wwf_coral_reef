'use strict';
module.exports = (sequelize, DataTypes) => {
  var benthic = sequelize.define('benthic', {
    MPA_Name: DataTypes.STRING,
    Site_ID: DataTypes.INTEGER,
    Site_Name: DataTypes.STRING,
    Year: DataTypes.INTEGER,
    Latitude: DataTypes.FLOAT,
    Longitude: DataTypes.FLOAT,
    Zone: DataTypes.STRING,
    PercentCoral: DataTypes.FLOAT,
    SECoral: DataTypes.FLOAT,
    PercentSoftCoral: DataTypes.FLOAT,
    SESoftCoral: DataTypes.FLOAT,
    PercentCCA: DataTypes.FLOAT,
    PercentBleached: DataTypes.FLOAT,
    SEBleached: DataTypes.FLOAT,
    PercentRubble: DataTypes.FLOAT,
    SERubble: DataTypes.FLOAT,
    PercentOthAlgae: DataTypes.FLOAT,
    SEOthAlgae: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return benthic;
};