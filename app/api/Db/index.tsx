import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
 
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
 

  try {
    await mongoose.connect("mongodb+srv://abhaytalentelgia:rb6NuuAfmtU4y820@cluster0.pev7gdw.mongodb.net/test");
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectToDB;