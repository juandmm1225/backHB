'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('repos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      repoId: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      gitUrl: {
        type: Sequelize.STRING
      },
      fav: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('repos');
  }
};