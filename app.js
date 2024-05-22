const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/apiRouter');
const connectToDataBase = require('./database/connect');
const cors = require('./middlewares/cors');
const cookieParser = require("cookie-parser");
const pagesRouter = require('./routes/pages');

const PORT = 3001;

const app = express();
connectToDataBase();

app.use(
    cors,
    cookieParser(), // Добавляем миддлвар для работы с куки
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public"))
  );

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})