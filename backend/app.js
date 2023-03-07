const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersRoutes = require('./routes/users-routes');
const LabTasksRoutes = require('./routes/labTasks-routes');
const StudentActivityHistoryRoutes = require('./routes/student-activity-history-routes');
const StudentAttemptedLabTasksRoutes = require('./routes/student-attempted-lab-tasks-routes');
const StudentAttemptedLabChallengesRoutes = require('./routes/student-attempted-lab-challenges-routes');
const StudentLabDataRoutes = require('./routes/student-lab-data-routes');
const LabsRoutes = require('./routes/labs-routes');
const LabChallengesRoutes = require('./routes/labChallenges-routes');
const AppointmentsDataRoutes = require('./routes/appointments-routes');



// mongodb+srv://abdurrehman:<password>@cluster0.jlslm.mongodb.net/<dbname>?retryWrites=true&w=majority
const app = express();


// following line establishes the connection with GBCLDatabase.
// mongoose.connect("mongodb+srv://abdurrehman:MvceaEr8JnRkWkl7@cluster0.jlslm.mongodb.net/GBCLDatabse",{ useNewUrlParser: true,
mongoose.connect(`mongodb://abdurrehman:MvceaEr8JnRkWkl7@cluster0-shard-00-00.jlslm.mongodb.net:27017,cluster0-shard-00-01.jlslm.mongodb.net:27017,cluster0-shard-00-02.jlslm.mongodb.net:27017/?ssl=true&replicaSet=atlas-oze3lo-shard-0&authSource=admin&retryWrites=true&w=majority`,{ useNewUrlParser: true,
useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log("FAILED to connect with the DB!!!, Errors are as below:");
    console.log(err);
  });



  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");


  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  next();

});


app.get("/", (req, res, next) => {
  res.status(200).json("Server is running!");
});

let cors = require('cors')
app.use(cors())

//-->  /api/Homepage + [/CreateUser && /FetchTHISUser]
app.use("/api/LabChallenges", LabChallengesRoutes);
app.use("/api/StudentAttemptedLabChallenges", StudentAttemptedLabChallengesRoutes);
app.use("/api/StudentAttemptedLabTasks", StudentAttemptedLabTasksRoutes);
app.use("/api/Labs", LabsRoutes);
app.use("/api/Users", UsersRoutes);
app.use("/api/LabTasks", LabTasksRoutes);
app.use("/api/StudentActivityHistory", StudentActivityHistoryRoutes);
app.use("/api/StudentLabData", StudentLabDataRoutes);
app.use("/api/Appointments", AppointmentsDataRoutes);































/**
 * 
 * 
 * below code is for CLoud Functions for Wowhealth PK/US
 * 
 */





// export const USERS = [
//   { name: 'umer', location: 'ca', portalAllowed: 'provider'},
//   { name: 'shifa', location: 'ca', portalAllowed: 'agency'},
//   { name: 'bilal', location: 'ca', portalAllowed: 'business'},
//   { name: 'waseem', location: 'ca', portalAllowed: 'all'},
//   { name: 'aftab', location: 'ca', portalAllowed: 'affiliate'},
// ];

// app.use("/route/users", getAllUsers);
// app.use("/route/user/:userName", getUser);
// app.use("/route/authorize/user/:userName/portal/:portalName", authorize);
// app.use("/route", emptyRoute);
// app.use(getDefault);

// export function emptyRoute(req, res){ res.status(404).json("Empty Params, enter params after /route/ in URL.")}
// export function getDefault(req, res){ res.status(404).json("Bad URL, error 404!")}
// export function getAllUsers(req, res){res.status(404).json(USERS)}
// export function authorize(req, res){
//   const {userName, portalName} = req.params;
//   const user = USERS.filter(x => x.name == userName)[0];
//   if(user){
//     user.portalAllowed == portalName || user.portalAllowed == 'all' ? res.status(200).send("Authorization Successful!") :
//     res.status(404).send("Authorization Failed, User cant access entered portal, try :"+user.portalAllowed)
//   }else{
//     res.status(404).send("Authorization Failed because this user was not found!")
//   }
// }
// export function getUser(req, res){
//   const userName = req.params.userName;
//   const user = USERS.filter(x => x.name == userName)[0];
//   user ? res.status(200).send(printUser(user)) :
//   res.status(404).send("This User Was Not Found.")
// }
// export function printUser(user){
//   return "User : "+user.name+", and this user's location is : "+user.location+", and this user has access to "+user.portalAllowed+" portal(s)."
// }
module.exports = app;


