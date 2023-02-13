const mongoose = require('mongoose');

// Definir un esquema para los documentos
const ProductSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          require:true,
        },
        price: {
          type: Number,
          require:true,
        },
        stock: {
          type: Number,
          require:true,
        },
        brand: {
          type: String,
          require:true,
        },
        category: {
          type: String,
          require:true,
        },
        descriptionShort: {
          type: String,
          require:true,
        },
        descriptionLong: {
          type: String,
          require:true,
        },
        freeShipping: {
          type: Boolean,
          require:true,
        },
        ageSince: {
          type: Number,
          require:true,
        },
        ageUntil: {
          type: Number,
          require:true,
        },
        image: {
          type: String,
          require:true,
        },
    },
);

// Crear un modelo a partir del esquema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;