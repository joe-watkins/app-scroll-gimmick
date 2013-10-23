$(".nav-bar").sticky({ topSpacing: 0 });


$(".down-arrow a").click(function(){
	$('body,html').animate({
		scrollTop: $("#inner-start").offset().top}, 800, 'swing');
});