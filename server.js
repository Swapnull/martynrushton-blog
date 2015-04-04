var http = require('http')
var ecstatic = require('ecstatic')

var staticd = ecstatic({
  root: __dirname + '/static',
  showDir: true,
  autoIndex:true,
  gzip: true
});

var server = http.createServer(staticd)

server.listen(process.env.PORT || 1337)
