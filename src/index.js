let express = require('express'),
    pug     = require('pug'),
    path    = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../templates'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);
