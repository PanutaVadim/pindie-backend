// routes/pages.js
const pagesRouter = require("express").Router();
const { sendDashboard, sendIndex } = require("../controllers/auth");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;