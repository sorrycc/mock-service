'use strict';

var koa = require('koa');
var cors = require('koa-cors');
var st = require('koa-static');

var app = koa();
var join = require('path').join;

app.use(cors());
app.use(st(join(__dirname, 'static')));

app.listen(3003, function() {
  console.log('listened on 3003');
});

