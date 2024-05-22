const { sendAllUsers, sendUserCreated, sendUserUpdating, sendUserDeleted, sendMe } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const { findAllUsers, createUser, updateUser, deleteUser, hashPassword, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require('../middlewares/users');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", findAllUsers,
checkEmptyNameAndEmailAndPassword,
checkAuth,
checkIsUserExists,
hashPassword,
createUser,
sendUserCreated)
usersRouter.put("/users/:id", checkAuth, checkEmptyNameAndEmail, updateUser, sendUserUpdating)
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe)

module.exports = usersRouter;

