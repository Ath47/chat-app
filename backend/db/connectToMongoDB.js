import mongoose from "mongoose";
const VITE_MONGODB_URI =
  "Your env var";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(VITE_MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
