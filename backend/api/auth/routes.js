const express = require('express');
const { authMiddleware } = require('../../middlewares/auth-middleware');

const authRouter = express.Router();

const { registerUser } = require('./mutations/register-user');
const { getUsers } = require('./queries/get-users');
const { loginUser } = require('./mutations/login-user');

authRouter.post('/register', registerUser);
authRouter.get('/users', authMiddleware, getUsers);
authRouter.post('/login', loginUser);

module.exports = {
  authRouter,
}
