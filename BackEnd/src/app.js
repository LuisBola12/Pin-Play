import express from 'express';
import config from './config';
import routes from './routes/pinPlay.routes';
import morgan from 'morgan';
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json"
const app = express();

//Settings
app.set('port',config.port);

//Middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/docs",swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(routes);

export default app;