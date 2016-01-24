var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var app = express();
var ReactDOMServer = require('react-dom/server');
jsx.install();


var PerfApp = require('./views/index.jsx');

app.use('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js', {
    debug: true
  })
  .transform('reactify')
  .bundle()
  .pipe(res);
});

app.use('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(ReactDOMServer.renderToStaticMarkup(
    React.DOM.body(
      null,
      React.DOM.div({
        id: 'container',
        dangerouslySetInnerHTML: {
          __html: ReactDOMServer.renderToString(React.createElement(PerfApp))
        }
      }),
      React.DOM.script({
        src: '/bundle.js'
      })
    )
  ));
});

var server = app.listen(3333, function() {
  var addr = server.address();
  console.log('Listening @ http://%s:%d', addr.address, addr.port);
});