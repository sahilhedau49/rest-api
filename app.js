require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const students_routes = require("./routes/students");

app.get("/", (req, res) => {
  res.send("It is live.");
});

app.use("/api/students", students_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT}, I'm connected!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
