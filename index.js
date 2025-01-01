require("dotenv").config();
const PORT = process.env.PORT || 8091;
const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) =>{
    res.send("Welcome to the ")
})
app.get("*", (req, res) => {
  res.send("testing");
});
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});