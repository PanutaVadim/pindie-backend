const {sendAllGames, sendGameCreated, sendGameUpdating, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const {findAllGames, createGame, updateGame, deleteGame} = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post("/games", checkAuth, createGame, sendGameCreated)
gamesRouter.put("/games/:id", checkAuth, updateGame, sendGameUpdating)
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;