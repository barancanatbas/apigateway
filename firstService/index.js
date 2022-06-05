const express = require("express");

const app = express();

app.get("/first", (req, res) => {
  res.send("Hello from first service get path");
});

app.post("/first", (req, res) => {
  res.send("Hello from first service post path");
});

app.put("/first", (req, res) => {
  res.send("Hello from first service put path");
});

app.get("/first", (req, res) => {
  res.send(`Hello from first service 2`);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
    }
);
