var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 8080);

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index.html');
});

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) 
    return res.sendStatus(400);
  else {
    var username = req.body.username;
    var password = req.body.password;
    if ((username == 'Anthem') && (password == 'DGVLWP1S')) {
      res.send({result: req.body.username});
    }
    else
      return res.sendStatus(400)
  }
});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
