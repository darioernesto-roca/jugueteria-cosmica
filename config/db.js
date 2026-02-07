const mongoose = require("mongoose");

const strictQuery = process.env.MONGOOSE_STRICT_QUERY !== "false";

mongoose.set("strictQuery", strictQuery);
mongoose.set("sanitizeFilter", true);

const dbConnect = async () => {
  const dbUri = process.env.DB_URI;

  if (!dbUri) {
    throw new Error("Missing DB_URI environment variable. Configure it in your .env file.");
  }

  try {
    const connection = await mongoose.connect(dbUri, {
      serverSelectionTimeoutMS: Number(process.env.DB_SERVER_SELECTION_TIMEOUT_MS || 5000),
      socketTimeoutMS: Number(process.env.DB_SOCKET_TIMEOUT_MS || 45000),
      maxPoolSize: Number(process.env.DB_MAX_POOL_SIZE || 20),
      minPoolSize: Number(process.env.DB_MIN_POOL_SIZE || 2),
      maxIdleTimeMS: Number(process.env.DB_MAX_IDLE_TIME_MS || 30000),
      autoIndex: process.env.NODE_ENV !== "production",
    });
    console.log("Mongodb is connected to", connection.connection.host);
  } catch (err) {
    if (process.env.NODE_ENV === "production") {
      console.error("Error in the database connection");
    } else {
      console.error("Error in the database connection", err);
    }
    throw err;
  }
};

module.exports = dbConnect;
