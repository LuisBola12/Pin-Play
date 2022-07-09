import { Router } from 'express';
import multer from 'multer';
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';
import { validateSchema } from '../middlewares/validate.schema';
import playerSchema from '../schema/player.schema';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const routerUsers = Router();
const upload = multer({ storage: storage })

routerUsers.post('/createUser', [upload.single('image_register'), validateSchema(playerSchema)], createUser)
routerUsers.post('/login', login)
routerUsers.post('/recoverPassword', recoverPassword)
routerUsers.post('/resetPassword', resetPassword)

export default routerUsers;