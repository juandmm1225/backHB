'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  repos.init({
    name: DataTypes.STRING,
    repoId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    owner: DataTypes.STRING,
    url: DataTypes.STRING,
    gitUrl: DataTypes.STRING,
    fav: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'repos',
  });
  return repos;
};