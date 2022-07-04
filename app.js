
const express = require('express');
const cors = require("cors")
const session = require('express-session');
const Router = require('./src/routes/index');
const Database = require("./src/config/Database/Database")
const app = express();
require("dotenv").config()



app.set('port', 8080);


//middleware
app.use(cors())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// app.set('view engine', 'ejs');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use("/", Router)


app.listen(8080, () => {
  console.log("i m on:",)
})
module.exports = app;
