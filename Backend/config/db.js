const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db connected successfully")
    } catch (error) {
        console.log("Error in connect ", error);
        process.exit(1);
    }
}

module.exports = connectDb;