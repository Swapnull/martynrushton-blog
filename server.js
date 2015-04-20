var http = require('http')
var ecstatic = require('ecstatic')
var metalsmith = require('./metalsmith-config') 

metalsmith.setup();

/* Server setup and fire on port 1337 */
var staticd = ecstatic({
  root: __dirname + '/build',
  showDir: true,
  autoIndex:true,
  gzip: true
});

var server = http.createServer(staticd)
server.listen(process.env.PORT || 1337)
