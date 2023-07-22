const express = require("express");
const Games = require("../models/Games");
const SliderCard = require("../models/SliderCard");
const Specification = require("../models/Specification");
const auth = require("../middleware/auth.middleware");
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

router.post("/", auth, async (req, res) => {
  try {
    const newItem = await Games.create({
      title: req.body.title,
      price: req.body.price,
      discount: req.body.discount,
      series: req.body.series,
      video: req.body.video,
      language: req.body.language,
      work: req.body.work,
      data: req.body.data,
      receipts: req.body.receipts,
      developer: req.body.developer,
      description: req.body.description,
      picture: req.body.picture,
      categories: req.body.categories,
      features: req.body.features,
      topSales: req.body.topSales,
    });

    await SliderCard.create({
      images: req.body.images,
      gameId: newItem._id,
    });

    await Specification.create({
      cpu: req.body.cpu,
      gpu: req.body.gpu,
      directx: req.body.directx,
      system: req.body.system,
      size: req.body.size,
      ram: req.body.ram,
      gameId: newItem._id,
    });

    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
