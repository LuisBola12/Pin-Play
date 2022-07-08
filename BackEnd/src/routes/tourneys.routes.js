import { Router } from 'express';
import { getCategories } from '../controller/tourneys.controller';

const routerTourneys = Router();

routerTourneys.get('/categories', getCategories)

export default routerTourneys;