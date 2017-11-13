$(document).ready(function() {


	 $("a[href='#get_callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

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

	 
$(".price_item_wrap .service_list").height('auto').equalHeights();



$(".top_wrapper p").animated("fadeInDown");
$(".top_wrapper .btn-wrap").animated("fadeInUp");


$(".slider_wrap").owlCarousel({
		loop:true,
		center: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
			},
			520:{
				items:1,
			},
			560:{
				items:1,
			},
			768:{
				items:1,
			},
			992:{
				items:1,
			},
			1200:{
				items:1,
			}
		}
	});



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

