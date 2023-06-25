require("dotenv").config();
const connectDB = require("./db/connect");
const Student = require("./model/student");

const StudentJSON = require("./students.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Student.deleteMany();
    await Student.create(StudentJSON);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
