const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDataBase() {
   try {
      await mongoose.connect(DB_URL);
      console.log("Успешно подключились в БД");
   } catch (err) {
      console.log("При подключении возникла ошибка");
      console.log(err);
   }
}

module.exports = connectToDataBase;