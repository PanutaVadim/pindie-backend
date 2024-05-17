const { sendAllCategories, sendCategoryCreated, sendCategoryUpdating, sendCategoryDeleted } = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory } = require('../middlewares/categories');

const categoriesRouter = require('express').Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", checkAuth,createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdating)
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;