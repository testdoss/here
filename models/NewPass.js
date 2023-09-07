const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    new_pass: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Newpass", UserSchema);