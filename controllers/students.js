const Student = require("../model/student");

const getAllStudents = async (req, res) => {
  const { name, section, sort, select } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (section) {
    queryObject.section = section;
  }

  let apiData = Student.find(queryObject); // find method --> to find data with specified key - code syntax (.find({name:"sahil"})) - url syntax (?name=sahil)

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix); // select method --> to select/show only specified keys - code syntax (.select(name cgpa section)) - url syntax (?select=name,cgpa)
  }

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix); // sort method --> to sort data with given key - code syntax (.sort(name cgpa section)) - url syntax (?sort=-cgpa,name)
  }

  let page = req.query.page || 1;
  let limit = req.query.limit || 10;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit); // skip method --> to skip specified number of data - code syntax (.skip(3)) - url syntax (?page=2&limit=3)

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllStudentsTest = async (req, res) => {
  const myData = await Student.find(req.query);
  res.status(200).json(myData);
};

module.exports = { getAllStudents, getAllStudentsTest };
