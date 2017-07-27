let express = require('express'),
    pug     = require('pug'),
    path    = require('path'),
    config  = require('../config');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../templates'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Express Burgers'
    });
});
app.get('/directions', function(req, res) {
    res.render('directions', {
        title: 'Express Burgers - Directions'
    });
});
app.get('/:menu', function(req, res) {
    let menu = req.params['menu'];
    res.render('menu', {
        title: `Express Burgers - Menu`,
        menu: config.item_menu[menu]
    });
});

app.listen(3000);
