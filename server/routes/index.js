const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/features", require("./features.routes"));
router.use("/categories", require("./categories.routes"));
router.use("/user", require("./user.routes"));
router.use("/slider", require("./slider.routes"));
router.use("/games", require("./games.routes"));
router.use("/sliderCard", require("./sliderCard.routes"))
router.use("/specifications", require("./specification.routes"))
router.use("/users", require("./user.routes"))

module.exports = router;
