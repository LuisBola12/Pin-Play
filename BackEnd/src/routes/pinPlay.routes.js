import { Router } from 'express';
import { createUser } from '../controller/user.Controller';
import { getAllPlayers,getPlayerTourneys ,getPlayerImage } from '../controller/players.controller';
import multer from 'multer';

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
router.get('/playerTourneys',getPlayerTourneys);
router.get('/playerImage/:s3Id',getPlayerImage);

// users
router.post('/createUser', upload.single('file'), createUser)


export default router;