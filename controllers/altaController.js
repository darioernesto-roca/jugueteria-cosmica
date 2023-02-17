// Controllers for alta

const Product = require('../models/product.model');
const { body, validationResult } = require("express-validator");


// Create new product
const createProduct = async (req, res) => {
    await body('name')
    .isLength({ min: 2, max: 20 })
    .withMessage('El nombre debe tener entre 2 y 20 caracteres.')
    .run(req);
  
    await body('price')
    .isFloat({ min: 0, max: 1000000 })
    .withMessage('El precio debe ser un número entre 0 y 1000000.')
    .run(req);
  
    await body('stock')
    .isInt({ min: 1 })
    .withMessage('El stock debe ser un número entero mayor a cero.')
    .run(req);
  
    await body('brand')
    .isLength({ min: 2, max: 20 })
    .withMessage('La marca debe tener entre 2 y 20 caracteres.')
    .run(req);
  
    await body('category')
    .isLength({ min: 2 })
    .withMessage('La categoría debe tener al menos 2 caracteres.')
    .run(req);
  
    await body('shortDescription')
    .isLength({ min: 2 })
    .withMessage('La descripción corta debe tener al menos 2 caracteres.')
    .run(req);
  
    await body('longDescription')
    .isLength({ min: 2 })
    .withMessage('La descripción larga debe tener al menos 2 caracteres.')
    .run(req);
  
    // await body('shipping')
    // .isBoolean()
    // .withMessage('El valor del envío debe ser verdadero o falso.')
    // .run(req);
  
    await body('ageFrom')
    .isInt({ min: 0, max: 14 })
    .withMessage('La edad desde debe ser un número entero entre 0 y 14.')
    .run(req);
  
    await body('ageTo')
    .isInt({ min: 0, max: 14 })
    .withMessage('La edad hasta debe ser un número entero entre 0 y 14.')
    .run(req);
  
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const product = new Product(req.body);
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


// Update product by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
};