import { Router } from "express";
import { addTournament } from "../controller/tournaments.controller";
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import { getAllPlayers,getPlayerTourneys ,getPlayerImage, topPlayersCategory, amountOfLadderByCategory} from '../controller/players.controller';
import { getCategories } from '../controller/tourneys.controller';
import playerSchema from '../schema/player.schema';
import { validateSchema } from '../middlewares/validate.schema';
import { checkAuth } from '../middlewares/auth';

const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);
router.post('/topPlayersCategory', topPlayersCategory);
router.post('/amountOfPages', amountOfLadderByCategory);

//Tournaments
router.post('/tournaments',addTournament);

// users
router.post('/createUser', validateSchema(playerSchema), createUser)
router.post('/login', login)
router.post('/recoverPassword', recoverPassword)
router.post('/resetPassword', resetPassword)

// router.post('/changePassword', [checkAuth], changePassword)

// Tourneys
router.get('/categories', getCategories)

export default router;