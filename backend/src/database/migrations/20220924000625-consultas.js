
'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    const ConsultasTable = queryInterface.createTable('consultas',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      valor:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_consulta:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
    }
      ); 
    return ConsultasTable;

  },

  down: queryInterface => queryInterface.dropTable('consultas'),
};
