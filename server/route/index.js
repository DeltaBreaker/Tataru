const router = require("express").Router();
const path = require("path");
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
