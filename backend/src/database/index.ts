import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'


import { DoctorSequelize} from './modelSequelize/doctor'
import { ConsultaSequelize } from './modelSequelize/consultas'
import { ExamSequelize } from './modelSequelize/exam'

dotenv.config()

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT as string),
  dialect: 'mysql',
})

export { sequelize as db,
        DoctorSequelize,
        ConsultaSequelize,
        ExamSequelize}