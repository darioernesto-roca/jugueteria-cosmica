// routes/contacto.js

module.exports = (app) => {
    app.get('/contacto.html', function (req, res) {
        res.render('contacto', {
            title: 'Juguetería Cósmica | Contacto'
        });
    });
};