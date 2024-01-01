import mongoose, { ConnectOptions } from "mongoose";
const url: string = "mongodb://localhost/hql";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedToplogy: true,
} as ConnectOptions);

const conn = mongoose.connection;
conn.on("connection", () => {
  console.log("Connection established with mongoDB");
});

conn.on("error", () => {
  console.log("An error occurred");
});
