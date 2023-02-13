const mongoose = require("mongoose");

const userScheme = new mongoose.SchemaType(
    {
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userScheme);