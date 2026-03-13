// require("dotenv").config();

// const {connectDB, mongoose} = require('./db');
// // const connectDB = require("./db");
// const Task = require("./models/task");
// const { user } = require('../back-end/models/user');
// const {task} = require('../back-end/models/task');

// async function main(){
//     await connectDB();

//     await user.deleteMany({});
//     await task.deleteMany({});

//     user.insertMany([
//         {name: "Alice Karioki", email: "alice@example.com", role: "admin"},
//         {name: "Dedan Okware", email: "dedan@example.com", }
//     ]); 

//     task.insertMany([
//         {title: "Write Proposal", status: "todo", owner: "Alice"},
//         {title: "Design Schema", status: "in_progress", owner: "Dedan"}
//     ]);

//     console.log("Data populated");
//     await mongoose.disconnect();
// }

// main();

// console.log(process.env.MONGO_URI);


require("dotenv").config();

const { connectDB, mongoose } = require("./db");

const User = require("./models/user");
const task = require("./models/task");

async function main() {

    await connectDB();

    await User.deleteMany({});
    await task.deleteMany({});

    await User.insertMany([
        { name: "Alice Karioki", email: "alice@example.com", role: "admin" },
        { name: "Dedan Okware", email: "dedan@example.com", role: "user" }
    ]);

    await task.insertMany([
        { title: "Write Proposal", status: "todo", owner: "Alice" },
        { title: "Design Schema", status: "in_progress", owner: "Dedan" }
    ]);

    console.log("Data populated");

    await mongoose.disconnect();
}

main();

console.log(process.env.MONGO_URI);