
/**
 * Module dependencies.
 */

import express from 'express';
import db from './mongodb/db.js';
// import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';
import history from 'connect-history-api-fallback';
import http from 'http';

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));

// app.engine('md', function(path, options, fn){  
//   fs.readFile(path, 'utf8', function(err, str){  
//     if (err) return fn(err);  
//     str = markdown.parse(str).toString();  
//     fn(null, str);  
//   });  
// });  

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

const MongoStore = connectMongo(session);
router(app);
// app.use(session({
// 	  	name: config.session.name,
// 		secret: config.session.secret,
// 		resave: true,
// 		saveUninitialized: false,
// 		cookie: config.session.cookie,
// 		store: new MongoStore({
// 	  	url: config.url
// 	})
// }))

// app.get('/', routes.index);
// app.get('/users', user.list);

// app.get('/proxy-api/markdown', function(req, res) {  
//     res.render('./index.md', {layout: false});  
// }); 

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	if(req.method=="OPTIONS") {
		res.send(200);
	} else {
		next();
	}
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
