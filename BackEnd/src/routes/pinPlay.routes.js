import { Router } from "express";
import { createUser } from "../controller/user.Controller";
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from "../controller/players.controller";
const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);

// users
router.post('/createUser',upload.single('profilePhoto'), createUser)


export default router;