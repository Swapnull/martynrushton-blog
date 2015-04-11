var http = require('http')
var fs = require('fs')
var ecstatic = require('ecstatic')

var Metalsmith = require('metalsmith')
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');


/* Blog options */
var metalsmith = Metalsmith(__dirname)
  .use(drafts())
  .use(markdown())
  .use(permalinks('posts/:title'))
  .use(templates('handlebars'))
  .destination('./build')
  .build(function(err, files) {
          if (err) {
            console.log(err)
            throw err;
          } else{
            var source = fs.createReadStream('./build/posts/home-page/index.html');
            var dest = fs.createWriteStream('./build/index.html');

            source.pipe(dest);
            source.on('end', function() {
              console.log('index copied successfully');
              deleteFolderRecursive('./build/posts/home-page')
            });
          source.on('error', function(err) { console.log('index copy failed')});
          }
      });

//Delete folders at runtime so they are not accessible from the browser
var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath, function(err){
          if(err){
            throw err
          }
        });
      }
    });
    fs.rmdirSync(path);
  }
  console.log('Removed folder ' + path)
};



/* Server setup */
var staticd = ecstatic({
  root: __dirname + '/build',
  showDir: true,
  autoIndex:true,
  gzip: true
});


var server = http.createServer(staticd)

server.listen(process.env.PORT || 1337)
