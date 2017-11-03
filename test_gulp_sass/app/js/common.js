$(document).ready(function() {

	 
	 


function load()	{
	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
};
load();

$(".top_text h1").animated("fadeInDown");
$(".top_text ul").animated("fadeInUp");










	$(".team_item_wrap").click(function() {
		
		if( $(this).hasClass("active") ) {
			$(this).removeClass("active");
		} else {
			$(".team_item_wrap").removeClass("active");
			$(this).addClass("active");
		}
	});

	$(".team_item_wrap p").animated("fadeIn");




	$(".contact-form label").click(function() {

		$(".contact-form label").each(function() {
			if ( !$(this).find("input")[0].value ) {
				$(this).removeClass("active");
			}
		});

		$(this).addClass("active");
	});



   



		
	});

