//This is the config for the metalsmith blog engine

//metalsmith requires
var Metalsmith = require('metalsmith')
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var assets = require('metalsmith-assets');
var wordcount = require('metalsmith-word-count');
var tags = require('metalsmith-tags');

//other requires
var handleHelpers = require('./handlebars-helpers') //also requires fs and moment


/* Blog engine setup */
module.exports = {
  setup: function(){
    return Metalsmith(__dirname)
          .use(tags({
              handle: 'tags',                  // yaml key for tag list in you pages
              path:'topics/:tag.html',                   // path for result pages
              template: 'tag.hbt'   // template to use for tag listing
          }))
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
