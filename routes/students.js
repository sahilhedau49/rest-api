const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getAllStudentsTest,
} = require("../controllers/students");

router.route("/").get(getAllStudents);
router.route("/testing").get(getAllStudentsTest);

module.exports = router;
