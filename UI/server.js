var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
console.log('port ', process.env.PORT);
app.listen(process.env.PORT || 8080);
