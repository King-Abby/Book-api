const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDb");
const colors = require("colors");

const app = express();

dotenv.config({ path: ".env" });

connectDB();

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");

app.use("/api/v1/book", bookRoutes);

const port = 5000;

const server = app.listen(
  port,
  console.log(`Server is running on ${port}`.yellow.bold)
);
