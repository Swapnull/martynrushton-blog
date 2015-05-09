//This is the config for the metalsmith blog engine

//metalsmith requires
var Metalsmith = require('metalsmith')
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var assets = require('metalsmith-assets');
var tags = require('metalsmith-tags');
var collections = require('metalsmith-collections');


//other requires
var handleHelpers = require('./handlebars-helpers') //also requires fs and moment


/* Blog engine setup */
module.exports = {
  setup: function(){
    return Metalsmith(__dirname)
          .use(tags({
              handle: 'tags',                  // yaml key for tag list in you pages
              path:'topics/:tag.html',                   // path for result pages
              template: 'tag.hbt',   // template to use for tag listing
              sortBy: "date",
              reverse : true
          }))
          .use(markdown())
          .use(drafts())
          .use(permalinks('posts/:title'))
          .use(templates('handlebars'))
          .use(assets({
              source: './assets',
              destination: './assets'
            }))
          .use(collections({
              articles: {
                pattern: './published/*.md',
                sortBy: 'date',
                reverse: true
              }
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
