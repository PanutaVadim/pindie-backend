const {sendAllGames, sendGameCreated, sendGameUpdating, sendGameDeleted, sendGameById} = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const {findAllGames, createGame, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest, findGameById} = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post(
    "/games",
    findAllGames,
    
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    checkAuth,
    sendGameCreated,
  );
  gamesRouter.get("/games/:id", findGameById, sendGameById )
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    checkAuth,
    sendGameUpdating,
  );
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;