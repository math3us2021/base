import express from 'express';
import router from './router';
import { db} from './database';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json())
app.use(router);


try {
  db.authenticate();
  console.log('Connection with sequelize');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(3333, () => {
  console.log('Server rodando na porta 3333!');
});
