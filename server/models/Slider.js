const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: [{ type: Schema.Types.ObjectId, ref: "Categories" }],
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    gameId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Slider", schema);
