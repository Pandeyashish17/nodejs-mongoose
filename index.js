const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const dotenv = require("dotenv");
const { request } = require("express");

const app = express();
dotenv.config();

// swagger we go here
// extended :https://swagger.io/specification/#infoobject

const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ashish",
      description: "it is description",
      servers: ["http://localhost:4000"],
    },
  },
  apis: ["./Routes/*.js"],
  //   apis: [index.js],
};
const swaggerDocs = swaggerJsDoc(swaggerOption);

app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

app.use(cors({ origin: "*" }));

app.use("/Public", express.static("./Public"));

app.use(bodyparser.json({ extended: true }));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(morgan("dev"));

// routes are imported here

app.get("/hello", (req, res) => {
  res.status(200).send("hello");
});

app.get("/", (req, res) => {
  res.send("it is working");
});

const testing = require("./Routes/testing");
app.use("/testing", testing);

// mongodb connection

const connectionURl = process.env.CONNECTION_URL;
const port = process.env.PORT || 4000;
mongoose
  .connect(connectionURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port), console.log("app is running in port 4000");
  })
  .catch((err) => {
    console.log(err);
  });
