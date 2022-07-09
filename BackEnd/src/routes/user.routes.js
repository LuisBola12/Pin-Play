import { Router } from 'express';
import { createUser, login, recoverPassword, resetPassword } from '../controller/user.Controller';

const routerUsers = Router();

routerUsers.post('/createUser', createUser)
routerUsers.post('/login', login)
routerUsers.post('/recoverPassword', recoverPassword)
routerUsers.post('/resetPassword', resetPassword)

export default routerUsers;