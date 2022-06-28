import { Router } from "express";
import { getAllPlayers, getPlayerImage } from "../controller/players.controller";
import { createUser } from "../controller/user.Controller";

const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerImage/:s3Id',getPlayerImage);

// users
router.post('/createUser',upload.single('profilePhoto'), createUser)


export default router;