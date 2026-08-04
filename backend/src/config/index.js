import mongoose from "mongoose";

const connectToDB = async() => {
    try {
        const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/goalgrid";
        await mongoose.connect(dbUri);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
}
export {connectToDB}