import mongoose from "mongoose";
const VITE_MONGODB_URI =
  "mongodb+srv://athuukul:8uiVLBX2WSW4UapO@cluster0.y1nyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(VITE_MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
