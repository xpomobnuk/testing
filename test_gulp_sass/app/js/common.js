$(document).ready(function() {

	 $(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});

	 
function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();

	$(window).resize(function() {
		heightDetect();
	})


$(".top_centered p").animated("fadeInDown");










	$(".main-mnu li").click(function() {
		
			$(".main-mnu li").removeClass("active");
			$(this).addClass("active");
		});
	});

