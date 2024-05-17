const {sendAllGames, sendGameCreated, sendGameUpdating, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const {findAllGames, createGame, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest} = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdating
  );
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;