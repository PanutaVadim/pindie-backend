const { sendAllUsers, sendUserCreated, sendUserUpdating, sendUserDeleted } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const { findAllUsers, createUser, updateUser, deleteUser, hashPassword, sendMe } = require('../middlewares/users');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", checkAuth, hashPassword, createUser, sendUserCreated)
usersRouter.put("/users/:id", checkAuth, updateUser, sendUserUpdating)
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe)

module.exports = usersRouter;

