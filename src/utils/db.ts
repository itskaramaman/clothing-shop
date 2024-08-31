import mongoose from "mongoose";

let connected = false;

async function connectDB() {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    connected = true;
    console.log("MongoDB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}

export default connectDB;
