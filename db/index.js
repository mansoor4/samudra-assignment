import mongoose from "mongoose";

const DBConnection = (cb) => {
  const mongoDB = "mongodb://127.0.0.1/samudraDB";
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
      cb();
    })
    .catch((err) => console.log(err));
};

export default DBConnection;
