import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize'
import { ConsultaSequelize } from './consultas';
import { ExamSequelize } from './exam';


export const DoctorSequelize = sequelize.define(
  'doctor',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  crm: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  estado_crm: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},  

  {
    underscored: true,
    modelName: 'doctor',
    tableName: 'doctor',
  },
)


  
ExamSequelize.belongsTo(DoctorSequelize, {
  constraints: true,
  foreignKey: 'id_doctor'});

  ConsultaSequelize.belongsTo(DoctorSequelize, {
    constraints: true,
    foreignKey: 'id_doctor'});

  DoctorSequelize.hasMany(ConsultaSequelize, {foreignKey: 'id_doctor'});
    DoctorSequelize.hasMany(ExamSequelize, {foreignKey: 'id_doctor'});
