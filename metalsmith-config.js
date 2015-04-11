//This is the config for the metalsmith blog engine

var fs = require('fs')


var Metalsmith = require('metalsmith')
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var assets = require('metalsmith-assets');
var Handlebars = require('handlebars')

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('nav', fs.readFileSync(__dirname + '/templates/partials/nav.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());


/* Blog engine setup */
module.exports = {
  setup: function(){
    return Metalsmith(__dirname)
          .use(drafts())
          .use(markdown())
          .use(permalinks('posts/:title'))
          .use(templates('handlebars'))
          .use(assets({
              source: './assets',
              destination: './assets'
            }))
          .destination('./build')
          .build(function(err, files) {
                  if (err) {
                    console.log(err)
                    throw err;
                  } else{
                    moveIndex()
                  }
              });
  }
}


/*HELPER FUNCTIONS*/

//move index to root (./build) and delete folder it was in.
var moveIndex = function(){
  var source = fs.createReadStream('./build/posts/home-page/index.html');
  var dest = fs.createWriteStream('./build/index.html');

  source.pipe(dest);
  source.on('end', function() {
    console.log('index copied successfully');
    deleteFolderRecursive('./build/posts/home-page')
  });
  source.on('error', function(err) { console.log('index copy failed')});
};

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
