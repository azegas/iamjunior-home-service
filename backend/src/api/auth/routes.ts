import express from 'express';

const authRouter = express.Router();

import { registerUser } from './mutations/register-user';
import { getUsers } from './queries/get-users';
import { loginUser } from './mutations/login-user';

// authRouter.post('/register', registerUser);
// authRouter.get('/users', getUsers);
// authRouter.post('/login', loginUser);

export { authRouter };
