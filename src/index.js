const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup the express assets path
app.use("/", express.static(path.join(__dirname, "../client")));

// API calls ------------------------------------------------------------------------------------
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "./client/pages/user.html"));
});
function userCalass(data) {
  this.id = data.id;
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.email = data.email;
}
function dispayInfo(user) {
  console.log(user);
}
app.get("/users", async (req, res) => {
  // Write your logic here
  let data = await fetch("https://dummyjson.com/users").then((data) => {});
  let parsed = data.json;
  let final = parsed[1];
  let data_final = userCalass(final);
  dispayInfo(data_final)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
