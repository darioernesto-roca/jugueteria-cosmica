require("dotenv").config({ path: '/env/DB_URI' });
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB_URI = process.env.DB_URI;

// Connection to MongoDB Atlas
const dbConnect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((db) => console.log("Mongodb is connected to", db.connection.host))
    .catch((err) => console.log(`Error in the database connection ${err}`));
}

module.exports = dbConnect;

