import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        console.log(mongoose.connection.readyState)
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            dbName: "todoapp",
        });
        console.log(`MongoDB Connected: ${connect.connection.host}`);

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
}