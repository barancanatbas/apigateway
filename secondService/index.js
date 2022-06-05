const express = require("express");

const app = express();

app.get("/second/deneme", (req, res) => {
  res.send("Hello from second service");
});

app.get("/app2/second", (req, res) => {
  res.send(`Hello from second service 2`);
});

app.listen(3002, () => {
    console.log("Server is running on port 3002");
    }
);