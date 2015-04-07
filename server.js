var http = require('http')
var ecstatic = require('ecstatic')

/* Blog options */
var blogBuilder = require('blog-builder')

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
