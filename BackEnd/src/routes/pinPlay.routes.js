import { Router } from "express";
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from "../controller/players.controller";
import { addTournament } from "../controller/tournaments.controller";
const router = Router();
//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);

//Tournaments
router.post('/tournaments',addTournament);


export default router;