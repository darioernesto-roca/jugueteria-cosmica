// routes/inicio.routes.js
const Product = require('../models/product.model');

module.exports = function(req, res, next) {
    const path = req.path;

    if (path === '/' || path === '/index.html') {
        console.log("Intentando traer los productos de la base de datos...");
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
                res.render('inicio', { products: newProducts, title: 'Juguetería Cósmica | Inicio'});
            }
        });
    } else {
        next();
    }
};


