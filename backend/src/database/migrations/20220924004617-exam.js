'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    const ExamTable = queryInterface.createTable('exam', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      type_exam: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_exam: {
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
    return ExamTable;

  },

  down: queryInterface => queryInterface.dropTable('exam'),
};
