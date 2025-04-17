import express from 'express';
import signupUserController from '../../controllers/User/createUser/signupUserController.js';
import signinUserController from '../../controllers/User/signin/signinUserController.js';
const UserRouter = express.Router();

UserRouter.post('/signup', signupUserController);
UserRouter.post('/signin', signinUserController);

export default UserRouter;