$(document).ready(function() {
  $(".top").css({"left":"2000px"}).animate({"left":"15px"}, 2000);
	$(".info").hide().fadeIn(4000);  


});

$(document).ready(function(){
        $('.hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
        });
    });