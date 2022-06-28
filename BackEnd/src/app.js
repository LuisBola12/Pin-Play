import express from 'express';
import config from './config';
import routes from './routes/pinPlay.routes';
import morgan from 'morgan';
import cors from "cors";

const app = express();

//Settings
app.set('port',config.port);

//Middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);

export default app;