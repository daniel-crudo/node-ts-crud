import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());

app.listen(3333, () => console.log('Welcome V12 you application ir running on port 3333'))

