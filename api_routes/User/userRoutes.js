import express from 'express';
import signupUserController from '../../controllers/User/createUser/signupUserController.js';
const UserRouter = express.Router();

UserRouter.post('/user-signup', signupUserController)

export default UserRouter;