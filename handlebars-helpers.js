//This is the config for handlebars


var fs = require('fs')
var Handlebars = require('handlebars')
var moment = require('moment');


Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('nav', fs.readFileSync(__dirname + '/templates/partials/nav.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

//formats the date
Handlebars.registerHelper('dateFormat', function(context, format) {
  var f = format || 'DD/MM/YYYY';
  return moment(new Date(context)).format(f);
});

//returns a list of tags and their count
Handlebars.registerHelper('getTopics', function(context){
  var currentObj = ''
  var key = ''
  var topics = []
  for(var i=0; i<Object.keys(context).length;i++){

    key = Object.keys(context)[i]

    topics.push(
      '<a class="topic-link" href="/topics/'+ key + '">' +
        '<li class="topic">' +
            '<span class="topic-title">'+ key.toUpperCase() +'</span><br>'+
            '<span class="topic-post-count">is tagged in '+ context[key].length +' [POST]</span>'+
        '</li>' + '</a>')

    if(context[key].length == 1)
      topics[i] = topics[i].replace('[POST]', 'post')
    else
      topics[i] = topics[i].replace('[POST]', 'posts')
  }
  return new Handlebars.SafeString(topics.join(""));
});

//make the links broweser friendly
Handlebars.registerHelper('getLink', function(context){
  return '/posts/' + context.toLowerCase().replace(/ /g, "-")
})

//Makes a string upper case
Handlebars.registerHelper('toUpper', function(context){
  return context.toUpperCase()
})
