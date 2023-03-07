const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    completed: String,
    id: String,
    title: String,
    description: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);
