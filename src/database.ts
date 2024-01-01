import mongoose, { ConnectOptions } from "mongoose";
const url: string = "mongodb://localhost/hql";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const conn = mongoose.connection;

export default conn
