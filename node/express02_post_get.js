const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/route_get", (req, res) => {
  res.status(200).send("Hello World! - /route_get");
});
app.post("/route_post", (req, res) => {
  res.status(200).send("Hello World! - /route_post");
});
app.all("/route_all", (req, res) => {
  res.status(200).send("Hello World! - /route_all");
});

app.listen(8080, () => {
  console.log("Server started");
});
