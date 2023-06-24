const Student = require("../model/student");

const getAllStudents = async (req, res) => {
  const myData = await Student.find({});
  res.status(200).json({ myData });
};

const getAllStudentsTest = async (_req, res) => {
  res.status(200).json({ msg: "I am getAllStudentsTest" });
};

module.exports = { getAllStudents, getAllStudentsTest };
