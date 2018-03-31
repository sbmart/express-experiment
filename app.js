var express = require('express')
var responseTime = require('response-time')

var app = express()

app.use(responseTime()) // adds response time to HTTP header

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(3000, function() {
    console.log('Listenning on port 3000');
});