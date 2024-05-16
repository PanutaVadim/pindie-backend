const sendAllCategories = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.categoriesArray));
}

const sendCategoryCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

const sendCategoryUpdating = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ massage: "Category updating" });
};

const sendCategoryDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game));
};

module.exports = { sendAllCategories, sendCategoryCreated, sendCategoryUpdating,  sendCategoryDeleted };