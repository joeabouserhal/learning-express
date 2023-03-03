const express = require("express");
const app = express();
const usersRouter = require("./routes/users/users");

app.get("/", (req, res) => {
  // res (response) is the response we'll be sending out
  // req (request) is the request sent by the client
  res.send("Home Page");
});

app.use("/api/users", usersRouter);

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
