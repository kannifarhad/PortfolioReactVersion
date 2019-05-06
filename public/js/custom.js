
/*$(function() {
	var form = $('#ajax-contact');

	var formMessages = $('#contact-message');

	$(form).submit(function(e) {
		e.preventDefault();

		var formData = $(form).serialize();
		$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Set the message text.
				$(formMessages).text(response);
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
				$('#subjects').val('');
				$('#phone').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('errors');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});

	});

});*/



$(function() {

	var form = $('#ajax-subscribe');
	var formMessages = $('#subscribe-message');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');
				$(formMessages).text(response);
				$('#name').val('');
				$('#email').val('');
			})
			.fail(function(data) {
				$(formMessages).removeClass('success');
				$(formMessages).addClass('errors');

				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});

	});

});


$(function() {

	var form = $('#addcomment');
	var formMessages = $('#comment-messages');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				$(formMessages).removeClass('errors');
				$(formMessages).addClass('success');
				$(formMessages).text(response);

				$('.addcomment').slideUp(300);
				$(this).attr('rel','open');
				$('.addcomment input[name="parent"]').val('');
				$('.addcomment .reply').hide();

				$('#commentname').val('');
				$('#commentmail').val('');
				$('#commenttext').val('');

				setTimeout(function(){
						$(formMessages).slideUp(300);
				}, 5000);

			})
			.fail(function(data) {
				$(formMessages).removeClass('success');
				$(formMessages).addClass('errors');
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your comment could not be sent.');
				}
			});

	});

});



$(document).ready(function () {

	/*$(".menyunuach").click(function() {
		console.log('suka');
	    if($('.phonemenu').is(':visible'))
	        $('.phonemenu').slideUp(500);
	    else
	        $('.phonemenu').slideDown(500);
	});*/

	jQuery('img.svgicon').each(function(){
	        var $img = jQuery(this);
	        var imgID = $img.attr('id');
	        var imgClass = $img.attr('class');
	        var imgURL = $img.attr('src');

	        jQuery.get(imgURL, function(data) {
	            // Get the SVG tag, ignore the rest
	            var $svg = jQuery(data).find('svg');

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

	            // Replace image with new SVG
	            $img.replaceWith($svg);

	        }, 'xml');

	    });

		$(".lamp").hover(function() {
				    	$(this).find("img").fadeIn(300);
				}, function() {
						$(this).find("img").fadeOut(300);
		});

		$(".sitat").hover(function() {
					$(".lamp").find("img").fadeIn(600);
				}, function() {
					$(".lamp").find("img").fadeOut(300);
		});

	$('#portfolio').mixItUp({
		animation: {
			enable: true,
			effects: 'fade scale',
			duration: 600,
			easing: 'ease',
			perspectiveDistance: '3000px',
			perspectiveOrigin: '50% 50%',
			queue: true,
			queueLimit: 1,
			animateChangeLayout: false,
			animateResizeContainer: true,
			animateResizeTargets: false,
			staggerSequence: null,
			reverseOut: false
		},
		selectors: {
			target: '.items',
			filter: '.filters li',
		},
		load: {
			filter: 'all',
			sort: 'default:asc'
		},
		layout: {
			display: 'inline-block',
			containerClass: '',
			containerClassFail: 'fail'
		}



	});

	$(".fancybox").fancybox({
		padding: 0,
		margin: 20,
		openEffect : 'elastic',
		openSpeed  : 150,
		closeEffect : 'elastic',
		closeSpeed  : 150,
		closeClick : true,
		helpers : {
			overlay : true
		}
	});

	/*$('.contactform input.requireds, .contactform textarea').blur(function(){
		if( !$(this).val() ) {
			$(this).removeClass('good').addClass('alert');
		} else {
			$(this).addClass('good');
		}
	});

$('.contactform').submit(function() {
	var errors = 0;
	$(".contactform input.requireds , .contactform textarea").map(function(){
		if( !$(this).val() ) {
			$(this).addClass('alert');
			$(this).removeClass('good');
			errors++;
		} else if ($(this).val()) {
			$(this).removeClass('alert');
			$(this).addClass('good');
			$("#form-messages").addClass('errors').text('Wait a second.Processing...');
		}
	});

	
});*/

$(".logos").owlCarousel({
	items : 4,
	itemsCustom : false,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [980,2],
	itemsTablet: [768,1],
	itemsTabletSmall: false,
	itemsMobile : [479,2],
	pagination:false,
	autoPlay : 3000,
	stopOnHover: true,
	autoHeight: false
});

$("#portfolioscroll").owlCarousel({
	items : 4,
	itemsCustom : false,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [980,2],
	itemsTablet: [768,2],
	itemsTabletSmall: false,
	itemsMobile : [479,1],
	pagination:false,
	autoPlay : 3000,
	stopOnHover: true,
	autoHeight: false
});

});
