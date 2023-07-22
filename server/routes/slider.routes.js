const express = require("express");
const Slider = require("../models/Slider");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");

router.get("/", async (req, res) => {
  try {
    const list = await Slider.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  console.log(req.body);
  try {
    const newItem = await Slider.create({
      ...req.body,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
