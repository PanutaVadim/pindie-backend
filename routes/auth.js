const authRouter = require("express").Router();
const { login } = require("../controllers/auth");
 
authRouter.use("/auth/login", login);

module.exports = authRouter;