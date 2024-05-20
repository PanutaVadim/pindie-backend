const users = require('../models/user');
const bcrypt = require('bcryptjs');

const hashPassword = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;
        next();
    } catch (error) {
        res.status(400).send({ message: "Error hashing password" });
    }
}

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
}

const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
        req.user = await users.findById(req.params.id);
        next();
    } catch (error) {
        res.status(404).send({
            message: "User not found"
        });
    
    }
}

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        console.log(req.body);
        req.user = await users.create(req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error creating user" });
    }
}

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
      next();
    }
  };

  const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
      next();
    }
  };

  const checkIsUserExists = async (req, res, next) => {
    if(!req.usersArray) {
      // обработка случая, когда req.usersArray не установлен
      return res.status(500).send("Ошибка: массив пользователей не найден");
    }
    
    const isInArray = req.usersArray.find((user) => {
      return req.body.email === user.email;
    });
    if (isInArray) {
      res.status(400).json({ message: "Пользователь с таким email уже существует" });
    } else {
      next();
    }
  };
  

const updateUser = async (req, res, next) => {
    try {
        console.log(req.body);
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error updating user" });
    }
}

const deleteUser = async (req, res, next) => {
    try {
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error deleting user" });
    }

}



module.exports = { createUser, findAllUsers, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, hashPassword };