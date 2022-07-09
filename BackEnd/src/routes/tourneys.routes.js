import { Router } from 'express';
import { getCategories, addTournament, getTournaments, getPageCount } from '../controller/tourneys.controller';

const routerTourneys = Router();

routerTourneys.post('/tournaments',addTournament);
routerTourneys.get('/categories', getCategories);
routerTourneys.get('/getTournaments', getTournaments);
routerTourneys.get('/getTournamentPages', getPageCount);


export default routerTourneys;