var express                 = require('express');
var connectionConfig        = require('./config/connection.js');
var bodyParser              = require('body-parser');
var socket                  = require('socket.io');
var connectionController    = require('./controllers/connectionController');
var app                     = express();

var socketCount             = 0;
var apiPath                 = '/api/v1';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var io                      = socket.listen(app.listen(connectionConfig.port));
console.log('oline');
// io.sockets.on('connection', function(socket){
//     //console.log('step 1');
//     //console.log('step 1 memberId = '+memberId);
//     //console.log(this);


// });