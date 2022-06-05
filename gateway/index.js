var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const services = require('./services');
 
app.all("/first*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: services.first});
});

app.all("/second*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: services.second});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});