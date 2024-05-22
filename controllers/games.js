const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

const sendGameUpdating = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ massage: "Game updating" });
};

const sendGameDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  };

module.exports = { sendGameCreated, sendAllGames, sendGameUpdating, sendGameDeleted, sendGameById};