const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnect = async () => {
  const dbUri = process.env.DB_URI;

  if (!dbUri) {
    throw new Error("Missing DB_URI environment variable. Configure it in your .env file.");
  }

  try {
    const connection = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", connection.connection.host);
  } catch (err) {
    console.error(`Error in the database connection ${err}`);
    throw err;
  }
};

module.exports = dbConnect;
