// routes/index.js

module.exports = (app, Product) => {
    app.get('/', (req, res) => {
        console.log("Intentando obtener los productos de la base de datos...");
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
};