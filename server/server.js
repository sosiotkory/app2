var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname + '/index.html'));
})
app.listen(3000, ()=>{
  console.log('App listening at port 3000');
})
