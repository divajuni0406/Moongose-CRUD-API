const Mongoose = require("mongoose");

let Schema = new Mongoose.Schema({
  id: { 
    type: Number, 
    require: true },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

const User = Mongoose.model("User", Schema);
module.exports = User;
