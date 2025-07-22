import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shreyanshm818:gsdlP1tdYpzY6RQI@cluster0.xmxwzlz.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
