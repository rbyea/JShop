const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/features", require("./features.routes"));
router.use("/categories", require("./categories.routes"));

module.exports = router;
