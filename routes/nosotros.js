// routes/nosotros.js

module.exports = (app) => {
    app.get('/nosotros.html', function (req, res) {
        res.render('nosotros', {
            title: 'Juguetería Cósmica | Nosotros'
        });
    });
};