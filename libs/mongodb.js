import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectMongoDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectMongoDB;
