import { Router } from "express";
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from "../controller/players.controller";
import { addTournament } from "../controller/tournaments.controller";
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import playerSchema from '../schema/player.schema';
import { validateSchema } from '../middlewares/validate.schema';
import { checkAuth } from '../middlewares/auth';

const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);

//Tournaments
router.post('/tournaments',addTournament);

// users
router.post('/createUser', validateSchema(playerSchema), createUser)
router.post('/login', login)
router.post('/recoverPassword', recoverPassword)
router.post('/resetPassword', resetPassword)

// router.post('/changePassword', [checkAuth], changePassword)




export default router;