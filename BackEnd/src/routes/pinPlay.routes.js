import { Router } from "express";
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from "../controller/players.controller";
const router = Router();
//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);



export default router;