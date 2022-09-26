'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    const UsersTable = queryInterface.createTable('doctor',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado_crm: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    }
      ); 
    return UsersTable;

  },

  down: queryInterface => queryInterface.dropTable('doctor'),
};
