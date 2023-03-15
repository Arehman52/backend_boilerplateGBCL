const express = require("express");

const Appoinmtnets = require("../models/testModels/appointments");
const router = express.Router();

router.get("/getAppointments", (req, res, next) => {
  Appoinmtnets.find().then((documents) => {
    res.status(200).json({
      message: "this is a list of all appointmnets recieved from DB",
      appointments: documents,
    });

    console.log("   ==> {/RecieveUsersFromDB} Users were downloaded.");
  });
});

router.post("/CreateAppointment", (req, res, next) => {
  const appt = new Appoinmtnets({
    completed: req.body.completed,
    id: req.body.id,
    title: req.body.title,
    description: req.body.description
  });

  appt
    .save()
    .then((result) => {
      res.status(201).json({
        isSuccess: true,
        message: "Appointment has been created succefully!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});


router.delete("/delete/appointmentId/:id", (req, res, next) => {
  Appoinmtnets.deleteOne({ _id: req.params.id }).then((result) => {
    Appoinmtnets.find().then((documents) => {
      res.status(200).json({
        message: "Appointment Deleted!",
        appointments: documents,
      });
  
      console.log("   ==> {/delete/appointmentId/:id} Appt. was deleted.");
    });
  });
});

module.exports = router;


