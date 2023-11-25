//app.js

require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const path = require('path');
const handlebars = require('express-handlebars');
const cors = require("cors");
const methodOverride = require("method-override");
const dbConnect = require('./config/db');
const hbs = handlebars.create();
const bodyParser = require('body-parser');


// Connecting to the database
dbConnect();

// Using CORS for every request
app.use(cors());

// To handle .json format
app.use(express.json());

// To parse the form data sent by users in the request and to store the data in an req.body object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Setting the routes
const contactoRoutes = require("./routes/contacto.routes");
const indexRoutes = require("./routes/index");

app.use(contactoRoutes);
app.use(indexRoutes);


// Setting handlebars middleware
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set('views', path.join(__dirname, 'views'));


// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setting the PORT listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening in port: http://localhost:${PORT}`));