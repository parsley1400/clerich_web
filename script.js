window.onload = function() {
　setTimeout('endLoading()', 2500);
}

function endLoading(){
  $('.js-loading').fadeOut(250);
} 

$(function(){
  $(".js-inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() <= 620){
        $('.js-nav').fadeOut(250);
    }else{
        $('.js-nav').fadeIn(500);
    }
})