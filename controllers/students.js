const getAllStudents = async (req, res) => {
  res.status(200).json({ msg: "I am getAllStudents" });
};

const getAllStudentsTest = async (req, res) => {
  res.status(200).json({ msg: "I am getAllStudentsTest" });
};

module.exports = { getAllStudents, getAllStudentsTest };
