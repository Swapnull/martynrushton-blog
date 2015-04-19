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
                    console.log("Build was successful")
                  }
              });
  }
}
