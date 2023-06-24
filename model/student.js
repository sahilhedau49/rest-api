const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: [true, "Roll number is needed!"],
  },
  section: {
    type: String,
    required: true,
    enum: {
      values: ["cse", "it", "aiml", "ds", "cyber"],
      message: `{VALUE} is not found`,
    },
  },
  cgpa: {
    type: Number,
    required: true,
  },
  hobbies: {
    type: Array,
    default: [null],
  },
});

module.exports = mongoose.model("Student", studentSchema);
