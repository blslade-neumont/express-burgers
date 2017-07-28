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
        title: 'Express Burgers',
        header: 'Express Burgers',
        navMenu: config.nav_menu
    });
});
app.get('/directions', function(req, res) {
    res.render('directions', {
        title: 'Express Burgers - Directions',
        header: 'Directions',
        navMenu: config.nav_menu
    });
});
app.get('/:menu', function(req, res) {
    let menu = req.params['menu'];
    let itemMenu = config.item_menu[menu];
    if (!itemMenu) {
        res.status(404).send('Not found');
        return;
    }
    res.render('menu', {
        title: `Express Burgers - Menu`,
        header: itemMenu.header,
        navMenu: config.nav_menu,
        menu: itemMenu.items
    });
});

app.listen(3000);
