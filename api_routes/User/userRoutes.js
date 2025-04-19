import express from 'express';
import signupUserController from '../../controllers/User/createUser/signupUserController.js';
import signinUserController from '../../controllers/User/signin/signinUserController.js';
import viewUserController from "../../controllers/User/viewUsers/ViewUserController.js";
import updateUserController from "../../controllers/User/updateUser/UpdateUserController.js";
const UserRouter = express.Router();

UserRouter.post('/signup', signupUserController);
UserRouter.post('/signin', signinUserController);
UserRouter.get('/', viewUserController);
UserRouter.put('/update', updateUserController);

export default UserRouter;