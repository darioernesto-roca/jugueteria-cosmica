const express = require("express");
const expressValidator = require("express-validator");
const altaController = require("../controllers/altaController");
const router = express.Router();
const Product = require("../models/product.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

// Posting a new product
router.post("/alta", upload.single("image"), async (req, res) => {
  try {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors);
      console.log("Vengo de los errores de las validaciones de routes/alta");
      return;
    }
    if (!req.file) {
      res.status(400).json({ error: "No se ha enviado ningún archivo" });
      return;
    }
    console.log(req.body);
    const imageCloudinary = await cloudinary.uploader.upload(req.file.path);
    console.log(imageCloudinary);
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      descriptionShort: req.body.shortDescription,
      descriptionLong: req.body.longDescription,
      freeShipping: req.body.shipping,
      ageSince: req.body.ageFrom,
      ageUntil: req.body.ageTo,
      image: imageCloudinary.secure_url,
      cloudinary_id: imageCloudinary.public_id,
    });

    newProduct
      .save()
      .then((result) => {
        res.status(200).json({ message: "Producto agregado exitosamente" });
      })
      .catch((error) => {
        n;
        console.log(error);
        res.status(500).json({ error: "Error al crear el producto" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

// Render alta.html page
router.get("/alta.html", function (req, res, next) {
  if (req.path === "/alta.html") {
    res.render("alta", {
      title: "Juguetería Cósmica | Alta",
    });
  } else {
    next();
  }
});

router.put("/alta/:id", altaController.updateProduct);

router.delete("/alta/:id", altaController.deleteProduct);

module.exports = router;
