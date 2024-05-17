const { sendAllUsers, sendUserCreated, sendUserUpdating, sendUserDeleted } = require('../controllers/users');
const { findAllUsers, createUser, updateUser, deleteUser, hashPassword } = require('../middlewares/users');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", hashPassword, createUser, sendUserCreated)
usersRouter.put("/users/:id", updateUser, sendUserUpdating)
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;

