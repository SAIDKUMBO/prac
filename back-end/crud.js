const {connectDB, mongoose} = require('./db');
const { user } = require('../back-end/models/user');
const {task} = require('../back-end/models/task');

async function main(){
    await connectDB();

    //CREATE
    const john = await user.create({name: "John Wachira", email: "john@plp.com"});
    console.log("Created: ",john);

    //READ
    const users= await user.find().select("name  email");
    console.log("All users: ", users);

    //UPDATE
    await user.updateOne({email:"john@plp.com"}, {role: "admin"});
    console.log("Updated John's role");

    //DELETE
    await user.deleteOne({name: "John Wachira"});
    console.log("John is deleted");

    //AGGREGATION
    const byStatus = await task.aggregate([
        {$group: {_id: "$status", total: {$sum: 1}}}
    ]);
    console.log("Tasks by status: ", byStatus);

    await mongoose.disconnect();
}
main();


