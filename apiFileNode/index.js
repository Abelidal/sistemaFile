'use strict';
require('dotenv').config();
const express         = require('express');
const fs              = require('fs');
const https           = require('https');
const app             = express();
const http            = require('http').Server(app);
const formidable      = require('formidable')
const bodyParser      = require('body-parser');
const postgraphql     = require('postgraphile').postgraphql;
const format          = require('date-format');
const axios           = require('axios');
const src             = require('./src/');
const serRRHH         = require('./src/services/rrhh');
const upload          = require('./src/services/upload');
const ActiveDirectory = require('activedirectory');
/*const jwt             = require("express-jwt");
const jwksRsa         = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `http://localhost:300/.well-known/jwks.json`,
  }),
  audience: "localhost",
  issuer: `http://localhost:3000/`,
  algorithms: ["RS256"],
});
*/
//var mv = require('mv');
//const fs = require('fs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); //false


// ****** ACCESOS A DOMINIOS CRUSADOS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//*** Accediendo a Archivos del de la vista
app.use('/', express.static(__dirname + '/public/'));

// ******* SERVISIOS EN NODE
app.use('/src', src);
app.use('/rrhh', serRRHH);
app.use('/upload', upload);

// ******* Seguridad
//app.use("/graphql", checkJwt);

// *******  ACCESOS A POSTGRAPHILE
const postgresConfig = {
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE
}


app.use(postgraphql(
  postgresConfig,
  process.env.POSTGRAPHQL_SCHEMA, {
    graphiql: true,
    watchPg: true,
    enableCors: true,
    jwtPgTypeIdentifier: `${process.env.POSTGRAPHQL_SCHEMA}.jwt`,
    jwtSecret: process.env.JWT_SECRET,
    pgDefaultRole: process.env.POSTGRAPHQL_DEFAULT_ROLE
    //,bodySizeLimit:'200kB'
    //,timeout: 5000
  }))

var io = require('socket.io')(http);
/////// SOCKET IO
io.on('connection', function (socket) {
  //socket.emit('reseptor', { hello: 'world' });
  socket.on('eessMinimo',function (data) {
    io.emit('eessMinimo', data);
    console.log('eessMinimo', data);
  });
});


// ***** MOSTRAR ERRO SI NO EXISTE URL
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ***** VERIFICAR EMBIENTE *****
app.use(function (err, req, res, next) {
  res.send(' ', err.message, ' ', (req.app.get('env') === 'development' ? err : {}));
});

http.listen(process.env.HTTP, function(){
  console.log('listening on *:'+process.env.HTTP);
});

/*
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}, app)
.listen(process.env.HTTPS, function () {
  console.log(`Example app listening on port ${process.env.HTTPS}! Go to https://localhost:${process.env.HTTPS}/`)
})
*/