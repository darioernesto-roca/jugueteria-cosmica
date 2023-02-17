// routes/aviso-de-privacidad.js

module.exports = function(req, res, next) {
    if (req.path === '/aviso-de-privacidad') {
        res.render('aviso-de-privacidad', {
            title: 'Juguetería Cósmica | Aviso de Privacidad'
        });
    } else {
        next();
    }
};