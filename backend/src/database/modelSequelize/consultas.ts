import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize'
import { DoctorSequelize } from './doctor';

export const ConsultaSequelize = sequelize.define(
  'consultas', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  valor:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_consulta:{
    type: DataTypes.DATE,
    allowNull: false,
  } ,
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
    modelName: 'consultas',
    tableName: 'consultas',
  },
)





