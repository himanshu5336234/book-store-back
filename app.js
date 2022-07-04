
const express = require('express');
const cors = require("cors")
const session = require('express-session');
const Router = require('./src/routes/index');
const Database = require("./src/config/Database/Database")
const app = express();
require("dotenv").config()



app.set('port', process.env.PORT);


//middleware
app.use(cors())


// app.set('view engine', 'ejs');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use("/", Router)


app.listen(process.env.PORT, () => {
  console.log("i m on:",)
})
module.exports = app;
