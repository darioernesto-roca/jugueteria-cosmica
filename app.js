
require("dotenv").config();
const express = require('express');
const cors = require("cors");
// const dbConnect = require('./config/db');
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require("method-override");
const Product = require('./models/product.model');
const dbConnect = require('./config/db');
const router = require('./routes/inicio')

const hbs = handlebars.create();

dbConnect();

// // Setting the routes
// const contactoRoutes = require("./routes/contacto");
// const inicioRoutes = require("./routes/inicio");
// const altaRoutes = require("./routes/alta");
// const nosotrosRoutes = require("./routes/nosotros");
// const avisoDePrivacidadRoutes = require("./routes/aviso-de-privacidad");

// app.use(contactoRoutes);
// app.use(inicioRoutes);
// app.use(altaRoutes);
// app.use(nosotrosRoutes);
// app.use(avisoDePrivacidadRoutes);




// Setting handlebars middleware
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set('views', path.join(__dirname, 'views'));


// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setting routes
app.get('/', (req, res) => {
    console.log("Intentando obtener los productos de la base de datos...");
     // Obtaining all cards from the database
    Product.find( {}, (err, products) => {
        if (err) {
            console.error(err);
            res.send('Error when getting the products');
        } else {
            const newProducts = products.map(product => ({
                name: product.name,
                price: product.price,
                stock: product.stock,
                brand: product.brand,
                category: product.category,
                descriptionShort: product.descriptionShort,
                descriptionLong: product.descriptionLong,
                freeShipping: product.freeShipping,
                ageSince: product.ageSince,
                ageUntil: product.ageUntil,
                image: product.image,
              }));
            console.log("Productos obtenidos:", products);
            res.render('inicio', { products: newProducts, title: 'Juguetería Cósmica | Inicio'});
            
        }
    });
});

app.get('/index.html', (req, res) => {
    console.log("Intentando obtener los productos de la base de datos...");
     // Obtaining all cards from the database
    Product.find( {}, (err, products) => {
        if (err) {
            console.error(err);
            res.send('Error when getting the products');
        } else {
            const newProducts = products.map(product => ({
                name: product.name,
                price: product.price,
                stock: product.stock,
                brand: product.brand,
                category: product.category,
                descriptionShort: product.descriptionShort,
                descriptionLong: product.descriptionLong,
                freeShipping: product.freeShipping,
                ageSince: product.ageSince,
                ageUntil: product.ageUntil,
                image: product.image,
              }));
            console.log("Productos obtenidos:", products);
            res.render('inicio', { products: newProducts, title: 'Juguetería Cósmica | Inicio'});
            
        }
    });
});


app.get('/alta.html', function (req, res) {
    res.render('alta', {
        title: 'Juguetería Cósmica | Alta'
    });
});

app.get('/contacto.html', function (req, res) {
    res.render('contacto', {
        title: 'Juguetería Cósmica | Contacto'
    });
});

app.get('/carrito.html', function (req, res) {
    res.render('carrito', {
        title: 'Juguetería Cósmica | Carrito'
    });
});

app.get('/nosotros.html', function (req, res) {
    res.render('nosotros', {
        title: 'Juguetería Cósmica | Nosotros'
    });
});

app.get('/aviso-de-privacidad.html', function (req, res) {
    res.render('aviso-de-privacidad', {
        title: 'Juguetería Cósmica | Aviso de Privacidad'
    });
});




// Validations with express-validators for 'contacto' and 'alta'
const {body, validationResult} = require('express-validator');
const { exists } = require('fs');

app.post('/register', [
    body('name', 'Ingrese un nombre y apellido')
        .exists()
        .isAlpha()
        .isLength({min:2, max: 30}),
    body('email', 'Ingrese un E-mail válido')
        .exists()
        .isEmail(),
    body('comments', 'Ingrese un comentario válido')
        .exists()
        .isAlphanumeric()
        .isLength({min:0, max: 200}),
    body('price', 'Ingrese un precio válido')
        .exists()
        .isNumeric(),
    body('stock', 'Ingrese una cantidad válida')
        .exists()
        .isNumeric(),
    body('brand', 'La marca no puede contener más de 40 caracteres')
        .exists()
        .isAlpha()
        .isLength({ max: 40}),
    body('category', 'La categoría no puede contener más de 50 caracteres')
        .exists()
        .isAlpha()
        .isLength({ max: 50}),
    body('short-description', 'La descripción corta no puede contener tener más de 80 caracteres')
        .exists()
        .isAlpha()
        .isLength({ max: 80}),
    body('long-description', 'La descripción larga no puede contener tener más de 2000 caracteres')
        .exists()
        .isAlpha()
        .isLength({ max: 2000}),
        
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors);
    }
});


// Obtaining tha card ass an array
// const {cards} = require('./products');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening in port: localhost:${PORT}`));