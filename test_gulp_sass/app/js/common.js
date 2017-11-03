$(document).ready(function() {

	 $("a[href='#get_in_touch']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	 
$(".down_head .scroll_down a").mPageScroll2id();

function load()	{
	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
};
load();

$(".top_text h1").animated("fadeInDown");
$(".top_text ul").animated("fadeInUp");



function heightses() {
		$(".our_services_item p").height('auto').equalHeights();
		$(".carousel-item p").height('auto').equalHeights();
	}

heightses();

	$(window).resize(function()	{
		heightses();
	});



$(".carousel-eq").owlCarousel({
		loop:true,
		center: true,
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

$(".advice_wrap").owlCarousel({
		loop:true,
		center: true,
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

// Replace all SVG images with inline SVG

	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
        	$svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
        	$svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        	$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

	});

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

