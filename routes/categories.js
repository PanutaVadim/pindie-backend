const { sendAllCategories, sendCategoryCreated, sendCategoryUpdating, sendCategoryDeleted } = require('../controllers/categories');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory } = require('../middlewares/categories');

const categoriesRouter = require('express').Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdating)
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;