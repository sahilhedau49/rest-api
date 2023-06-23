const mongoose = require("mongoose");

uri =
  "mongodb+srv://hedausahil49:eX9KKixk6EABhlc3@restapi.8qxm1ng.mongodb.net/RestApi?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("Mongoooooooooooooooo!");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
