const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5050;

const todoRoute = require("./routes/todoRoute");

app.use(express.json());
app.use(cors());

const mongoUrl =
  "mongodb+srv://rasurimanishasri:S1ryf8HP89FVLfcy@cluster0.zv8dxjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

/*mongoose.connect(mongoUrl, {});
mongoose.connect("connected", () => {
  console.log(" Connection established with MongoDB successfully ");
});

const connectToMongo = () => {
  mongoose.connect(mongoUrl, () => {
    console.log("Connected to Mongo Successfully!");
  });
};*/

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoUrl);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

app.use("/api", todoRoute);

app.listen(port, () => {
  console.log("Server started on port" + " " + port);
});

module.exports = connectToMongo;
