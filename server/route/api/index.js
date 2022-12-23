const router = require("express").Router();
const path = require("path");
const memoryRouter = require("./MemoryRoutes.js");
const memberRouter = require("./MemberRoutes.js");

router.use("/memory", memoryRouter);
router.use("/member", memberRouter);

module.exports = router;
