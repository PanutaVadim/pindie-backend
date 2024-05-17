const users = require('../models/user');
const bcrypt = require('bcryptjs');

const login = (req, res) => {
    const { email, password } = req.body;
    users
    .findUserByCredentials(email, password)
    .then(user => {
res.status(200).send({
    _id: user._id, username: user.username, email: user.email,
});
    }).catch(error => {
        res.status(401).send({ massage: error.message, });
    
    })
}


module.exports = { login };