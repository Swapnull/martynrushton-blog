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
          .use(drafts())
          .use(tags({
              handle: 'tags',
              path:'topics/:tag.html',
              template: 'tag.hbt',
              sortBy: "date",
              reverse : true
          }))
          .use(markdown())
          .use(collections({
              articles: {
                pattern: './published/*.md',
                sortBy: 'date',
                reverse: true
              }
            }))
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
