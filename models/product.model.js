const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    descriptionShort: {
      type: String,
      required: true,
    },
    descriptionLong: {
      type: String,
      required: true,
    },
    freeShipping: {
      type: Boolean,
      required: true,
    },
    ageSince: {
      type: Number,
      required: true,
    },
    ageUntil: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cloudinary_id: {
      type: String,
    }
  },
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
