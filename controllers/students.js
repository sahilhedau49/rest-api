const Student = require("../model/student");

const getAllStudents = async (req, res) => {
  const { name, section, sort } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (section) {
    queryObject.section = section;
  }

  let apiData = Student.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllStudentsTest = async (req, res) => {
  const myData = await Student.find(req.query);
  res.status(200).json(myData);
};

module.exports = { getAllStudents, getAllStudentsTest };
