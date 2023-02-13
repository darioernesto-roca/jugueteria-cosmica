// routes/alta.js

module.exports = (app) => {
    app.get('/alta.html', function (req, res) {
        res.render('alta', {
            title: 'Juguetería Cósmica | Alta'
        });
    });
  };
  