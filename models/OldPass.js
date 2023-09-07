const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    old_pass: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Oldpass", UserSchema);