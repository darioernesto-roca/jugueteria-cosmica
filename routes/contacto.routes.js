// routes/contacto.js

module.exports = function(req, res, next) {
    if (req.path === '/contacto.html') {
        res.render('contacto', {
            title: 'Juguetería Cósmica | Contacto'
        });
    } else {
        next();
    }
};