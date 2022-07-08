import { Router } from 'express';
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import { getAllPlayers,getPlayerTourneys ,getPlayerImage, topPlayersCategory, amountOfLadderByCategory} from '../controller/players.controller';
import { getCategories } from '../controller/tourneys.controller';
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
router.post('/topPlayersCategory', topPlayersCategory);
router.post('/amountOfPages', amountOfLadderByCategory);

// users
router.post('/createUser', [upload.single('image_register'), validateSchema(playerSchema)], createUser)
router.post('/login', login)
router.post('/recoverPassword', recoverPassword)
router.post('/resetPassword', resetPassword)

// router.post('/changePassword', [checkAuth], changePassword)

// Tourneys
router.get('/categories', getCategories)

export default router;