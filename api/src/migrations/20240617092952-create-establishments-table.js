'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('establishments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      signatura: {
        type: Sequelize.STRING,
      },
      denominacio_comercial: {
        type: Sequelize.STRING,
      },
      grup: {
        type: Sequelize.STRING,
      },
      subgrup: {
        type: Sequelize.STRING,
      },
      inici_d_activitat: {
        type: Sequelize.DATE,
      },
      estat: {
        type: Sequelize.STRING,
      },
      municipi: {
        type: Sequelize.STRING,
      },
      localitat: {
        type: Sequelize.STRING,
      },
      direcci: {
        type: Sequelize.STRING,
      },
      utm_x: {
        type: Sequelize.DOUBLE,
      },
      utm_y: {
        type: Sequelize.DOUBLE,
      },
      categoria_gold: {
        type: Sequelize.STRING,
      },
      activitat_secund_ria: {
        type: Sequelize.STRING,
      },
      aforament_m_xim: {
        type: Sequelize.INTEGER,
      },
      explotador_s: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.DOUBLE,
      },
      longitude: {
        type: Sequelize.DOUBLE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('establishments')
  }
}