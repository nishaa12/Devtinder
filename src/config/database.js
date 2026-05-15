const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nishakrim40_db_user:nisha123@namastenodejs.duascfq.mongodb.net/DevTinder?retryWrites=true&w=majority&appName=Namastenodejs"
  );
};

module.exports = connectDB;