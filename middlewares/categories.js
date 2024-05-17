const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}


const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error creating category" });
    }
}

const updateCategory = async (req, res, next) => {
    try {
        console.log(req.body);
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error updating category" });
    }
}

const checkEmptyName = async (req, res, next) => {
    if(!req.body.name) {
        res.status(400).send({ message: "Enter name for category" });
        next();
    } else {
        next();
    
    }
   } 

   const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
      return req.body.name === category.name;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
      next();
    }
  };

   const deleteCategory = async (req, res, next) => {
    try {
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error deleting category" });
    }

}

module.exports = { createCategory, findAllCategories, updateCategory, checkEmptyName, checkIsCategoryExists, deleteCategory };