const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require('./routes'); 

// initialitazion
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);


//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Globla Variables
app.use((req, res, next) => {
  next();
});

///Routes
app.use(require("./routes"));
app.use(require("./routes/users"));
app.use(require("./routes/pacientes"));
app.use(require("./routes/cirujanos"));
app.use(require("./routes/login"));
app.use(require("./routes/graphresulaltas"));



//start the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });