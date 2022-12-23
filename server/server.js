const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
const db = require("./config/connection");
const router = require("./route");
const Discord = require("./discord");

Discord.start();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/", router);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
