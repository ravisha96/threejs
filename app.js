/**
 * Module dependencies.
 *
 * @param express	express.js dependencies
 * @param [http]	default node module for htpp request
 * @param [app]		instance of express module
 *
 */
'use strict';
var express = require('express'),
	http = require('http'),
	app = express();

/**
* @description	Server configurational setting resides here.
* @callback [express.static]	setting the default paths
*/
app.configure(function () {
	app.set('port', process.env.PORT || 7000);
	app.use(express.static(__dirname + '/app'));
	app.use(express.static(__dirname + '/public'));
});

/**
 * [Router for index page, navigate user to mentioned file path.] 
 * @param  {[type]} req - data for request url
 * @param  {[type]} res - server response
 * @return {[url]}
 */
app.get('/', function (req, res) {
	res.sendfile('./app/basicObjects.html');
});

app.get('/lms', function (req, res) {
	res.sendfile('./app/addingLightsMaterialsShadows.html');
});

app.get('/animation', function (req, res) {
	res.sendfile('./app/animation.html');
});

app.get('/customgeometry', function (req, res) {
	res.sendfile('./app/customGeometry.html');
});

app.get('/particles', function (req, res) {
	res.sendfile('./app/particles.html');
});

app.get('/digitalwall', function (req, res) {
	res.sendfile('./app/digitalWall.html');
});

/**
 * @description [Function will create a node server with the port address set above]
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});