require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const router = require("./routes/router");

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet());

app.use("/api", router);

app.listen(port, () =>
  console.log(`The Server started at http://localhost:${port}`)
);
