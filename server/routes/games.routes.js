const express = require("express");
const Games = require("../models/Games");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    let query = Games.find();

    // Применение фильтра по категории
    if (category) {
      query = query.where("categories").equals(category);
    }

    // Применение фильтра по диапазону цен
    if (minPrice && maxPrice) {
      query = query.where("price").gte(minPrice).lte(maxPrice);
    } else if (minPrice) {
      query = query.where("price").gte(minPrice);
    } else if (maxPrice) {
      query = query.where("price").lte(maxPrice);
    }

    const list = await query.exec();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
