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
        navMenu: config.nav_menu,
        randBurger: config.item_menu.burgers.items[Math.floor(Math.random() * config.item_menu.burgers.items.length)],
        randSide: config.item_menu['side-dishes'].items[Math.floor(Math.random() * config.item_menu['side-dishes'].items.length)],
        randDessert: config.item_menu.desserts.items[Math.floor(Math.random() * config.item_menu.desserts.items.length)]
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
    console.log(itemMenu.menu_description);
    res.render('menu', {
        title: `Express Burgers - Menu`,
        header: itemMenu.header,
        navMenu: config.nav_menu,
        menuDescription: itemMenu.menu_description,
        menu: itemMenu.items
    });
});

app.listen(3000);
