const express = require ("express");
const morgan = require ("morgan");

const mainRoute = require("../routes");

const app = express();

app.use(morgan("dev"));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors()); 

app.use(express.json()); 

app.use(mainRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app