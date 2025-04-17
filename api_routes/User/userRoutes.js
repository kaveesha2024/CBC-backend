import express from 'express';
import signupUserController from '../../controllers/User/createUser/signupUserController.js';
const UserRouter = express.Router();

UserRouter.post('/signup', signupUserController);
UserRouter.post('/signin', );

export default UserRouter;