import express from 'express';
import signupUserController from '../../controllers/User/createUser/signupUserController.js';
import signinUserController from '../../controllers/User/signin/signinUserController.js';
import viewUserController from "../../controllers/User/viewUsers/ViewUserController.js";
const UserRouter = express.Router();

UserRouter.post('/signup', signupUserController);
UserRouter.post('/signin', signinUserController);
UserRouter.get('/', viewUserController);

export default UserRouter;