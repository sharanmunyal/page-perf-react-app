//var express = require('express');
//var React = require('react');
//var ReactDOMServer = require('react-dom/server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var webpackMiddleware = require('webpack-dev-middleware');
var express = require('express');

var app = express();

var compiler = webpack(config);

compiler.watch({ // watch options:
    aggregateTimeout: 300
}, function(err, stats) {
    // ...
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(webpackMiddleware(compiler));

app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(3000);