const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phone: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phone", UserSchema);