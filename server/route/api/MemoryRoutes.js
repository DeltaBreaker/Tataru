const router = require("express").Router();
const path = require("path");
const { Memory } = require("../../models");

router.get("/", (req, res) => {
  try {
    const amt = req.query.amt ? req.query.amt : 0;
    const page = req.query.page ? req.query.page : 0;
    Memory.find()
      .populate("uploader")
      .skip(amt * page)
      .limit(amt ? amt : 1000)
      .exec((err, result) => {
        res.json(result);
      });
  } catch (e) {
    res
      .status(500)
      .json({ message: "There was an error processing this request" });
  }
});

router.get("/count", (req, res) => {
  try {
    Memory.count().exec((err, count) => {
      res.json({ count });
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "There was an error processing this request" });
  }
});

router.get("/random", (req, res) => {
  try {
    Memory.count().exec((err, count) => {
      let random = Math.floor(Math.random() * count);
      Memory.findOne()
        .populate("uploader")
        .skip(random)
        .exec((err, result) => {
          res.json(result);
        });
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "There was an error processing this request" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Memory.findOne({ _id: req.params.id }).populate(
      "uploader"
    );

    if (!result) {
      res.status(404).json({ message: "That memory cannot be found" });
      return;
    }

    res.json(result);
    return;
  } catch (e) {
    res
      .status(500)
      .json({ message: "There was an error processing this request" });
  }
});

module.exports = router;
