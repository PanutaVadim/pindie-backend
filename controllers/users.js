const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
}

const sendUserCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

const sendUserUpdating = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ massage: "User updating" });
};

const sendUserDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

module.exports = { sendAllUsers, sendUserCreated, sendUserUpdating, sendUserDeleted };