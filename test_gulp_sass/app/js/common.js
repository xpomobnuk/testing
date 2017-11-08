$(document).ready(function() {

/* -------------- TOGGLE MENU ------------- */
$(".toggle-mnu").click(function() {
 	$(this).toggleClass("on");
 });

	 $(".top_mnu ul a").click(function(){
	 $(".top_mnu").fadeOut(600);
	 })
 
$(".toggle-mnu").click(function(){
	if ($(".top_mnu").is(":visible")){
		$(".top_text").removeClass("h_opacify");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").addClass("h_opacify");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	}
});

	 




$(".top_wrapper").animated("fadeInDown");

// $('.item_img_wrap').each(function() {
// 	$(this).hover(function(){
// 		$(this).find("span").animated("bounceIn");
// 	},
// 	function(){
// 		$(this).find("span").animated("bounceOut");
// 	});
// });

$('.item_img_wrap').each(function() {
	$(this).hover(function(){
		if($(this).find(".top_item_wrap").find("span").hasClass("bounceOut")) {
			$(this).find(".top_item_wrap").find("span").removeClass("bounceOut");
		}
		$(this).find(".top_item_wrap").find("span").animated("bounceIn");
	},
	function(){
		$(this).find(".top_item_wrap").find("span").animated("bounceOut");
	});
});











	$(".main-mnu li").click(function() {
		
			$(".main-mnu li").removeClass("active");
			$(this).addClass("active");
		});
	});

