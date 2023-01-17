
const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

const hbs = handlebars.create();

// Setting handlebars middleware
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Setting handlebars routes
app.get('/', function (req, res) {
    res.render('inicio', {cards, title: 'Juguetería Cósmica | Inicio'
    });
});

app.get('/index.html', function (req, res) {
    res.render('inicio', {cards, title: 'Juguetería Cósmica | Inicio'
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

// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));


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
const {cards} = require('./products');


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening in port: localhost:${PORT}`));