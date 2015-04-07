var http = require('http')
var ecstatic = require('ecstatic')
var blogBuilder = require('blog-builder')


/* Blog options */
var options = require('./blog-config.js')
var blog = new blogBuilder(options)

blog.build()
console.log('blog built')


/* Server setup */
var staticd = ecstatic({
  root: __dirname + '/public',
  showDir: true,
  autoIndex:true,
  gzip: true
});

var server = http.createServer(staticd)

server.listen(process.env.PORT || 1337)
