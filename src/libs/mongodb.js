import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_MONDODB}:${process.env.PASSWORD_MONGODB}@ultragym.usfwe.mongodb.net/?retryWrites=true&w=majority&appName=ultragym`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
  }
};
