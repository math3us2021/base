import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize'
import { DoctorSequelize } from './doctor';

export const ExamSequelize = sequelize.define(
  'exam', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type_exam:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_exam:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  id_doctor: {
    type: DataTypes.INTEGER,
    references: {
      model: DoctorSequelize,
      key: 'id',
    },
  },
}, 
  {
    underscored: true,
    modelName: 'exam',
    tableName: 'exam',
  },
)



