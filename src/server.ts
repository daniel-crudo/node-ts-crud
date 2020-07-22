import express from 'express';
import routes from './routes/index';
import './database/index';
import cors from 'cors';
import requireDir from 'require-dir';

const app = express();

// cors controla o acesso das requisições.
app.use(cors());

app.use(express.json());
app.use(routes);

// importa automaticamente tudo que estiver dentro da pasta models.
requireDir('./models');

app.listen(3333, () => console.log('Welcome V12 your application is running on port 3333'))

