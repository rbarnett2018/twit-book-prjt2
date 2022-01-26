const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.FOO;
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const create = require("./routes/create-router");
const edit = require("./routes/update-router");
const view = require("./routes/view-router");
const home = require("./routes/home-router");
const deletE = require("./routes/delete-router");

app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI =
  process.env.NODE_ENV === "production" ? process.env.DB_URL : connectionString;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log("Connection failed!", error));
  app.use(express.static('public/css'))
app.use("/create", create);
app.use("/edit", edit);
app.use("/delete", deletE);
app.use("/view", view);
app.use("/", home);
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
