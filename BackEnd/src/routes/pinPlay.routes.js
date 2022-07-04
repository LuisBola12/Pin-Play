import { Router } from "express";
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from "../controller/players.controller";
import { addTournament } from "../controller/tournaments.controller";
import { Router } from 'express';
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from '../controller/players.controller';
import multer from 'multer';
import playerSchema from '../schema/player.schema';
import { validateSchema } from '../middlewares/validate.schema';
import { checkAuth } from '../middlewares/auth';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })
const router = Router();

//Players
router.get('/players',getAllPlayers);
router.get('/playerTourneys/:licenseNumber',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);

//Tournaments
router.post('/tournaments',addTournament);

// users
router.post('/createUser', [upload.single('image_register'), validateSchema(playerSchema)], createUser)
router.post('/login', login)
router.post('/recoverPassword', recoverPassword)
router.post('/resetPassword', resetPassword)

// router.post('/changePassword', [checkAuth], changePassword)




export default router;