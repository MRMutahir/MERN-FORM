const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SignIn = mongoose.model("SignIn", signInSchema);

module.exports = SignIn;
