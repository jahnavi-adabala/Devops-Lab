const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,    
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;



// const mongoose = require("mongoose"); 
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB Connected");
//     } catch (err){
//         console.log("MongoDB connection error:", err);
//         process.exit(1);
//     }
// };
// moddule.exports = connectDB;