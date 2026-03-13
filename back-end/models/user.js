const { mongoose } = require("../db");
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    role: {type: String, default: "User"}
}, {timestamps: true});

const user = mongoose.model('user', userSchema);

module.exports = user;
