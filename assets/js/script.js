$(document).ready(function(){

  mobileDevice()
});

$(window).resize(function(){
  mobileDevice()
})


function mobileDevice(){

  //margin-top is set to 0px when media queries are active
  if($('.right-column').css('margin-top') == '0px'){
    //move the tags to above the comments
    $('.right-column').insertBefore('#disqus_thread');
  } else{
    $('.right-column').insertAfter('article');
  }
}
