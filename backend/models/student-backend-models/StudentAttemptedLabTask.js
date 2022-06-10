const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const StudentAttemptedLabTaskSchema = mongoose.Schema({
  LabJoinCode: String,
  AttemptedLabTask_id: String,
  StudentzUsername: String,
  LabTaskQuestion: String,
  LabTaskAnswerCode: String,
  LabTaskSolutionByTeacher: String,
  LabTaskMatchPercentage: Number,
  LabTaskAnswerOutput: String,
  LabTaskAnswerInput: String,
  GainedXPs: Number,
  LabTaskAttempted:Boolean,
  LabTaskChecked:Boolean,
  LabTaskTitle: String,
  LabTaskXPs: Number

});

StudentAttemptedLabTaskSchema.plugin(uniqueValidator);

module.exports = mongoose.model("StudentAttemptedLabTask",StudentAttemptedLabTaskSchema);




