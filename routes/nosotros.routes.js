// routes/nosotros.js

module.exports = function(req, res, next) {
    if (req.path === '/nosotros.html') {
        res.render('nosotros', {
            title: 'Juguetería Cósmica | Nosotros'
        });
    } else {
        next();
    }
};