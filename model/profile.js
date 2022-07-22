const Mongoose = require("mongoose");

let Schema = new Mongoose.Schema({
    user_id : {
        type: Number,
        require: true,
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    full_name: {
        type: String,
        require: true
    },
    umur: {
        type: Number,
        require: true
    },
    tanggal_lahir: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
})

const Profile = Mongoose.model("Profile", Schema);
module.exports = Profile;
