$(document).ready(function () {


	$("#loadmore").click(function() {
						var typestr = $(this).attr('data-type');
								categorystr = $(this).attr('data-category');
								pagestr = eval($(this).attr('data-page')) + 1;
								langstr = $(this).attr('data-lang');
								link = $(this).attr('data-link');

								$.ajax({
												url: link ,
												data: {type: typestr, category : categorystr , page : pagestr, lang : langstr},
												type: 'POST',
												success : function(data) {
																			data = jQuery.parseJSON(data);
																			if (data.length == 0 ) {
																					$('#loadmore').addClass('disabledbutton');
																			} else {
																					$('#loadmore').attr('data-page', pagestr);
																					if (categorystr == '') {
																							generatePostType(typestr, data);
																					} else {
																						generatePostCategory(typestr, categorystr, data);
																					}
																			}

																	},
												error: function() {
																			alert('Something goes wrong.Please Try Again.');
																	}
								});
	});


	function generatePostType(type, data) {
		$.each(data, function(key, post){
					var gencategory;
					$.each(post.categorylist,  function(key, cat){
							if ( categories[cat]['type'] == type) {
										gencategory = categories[cat]['slug'];
										return false;
							}
					});
					addPostHTML(post, type, gencategory);
			});

	}

	function generatePostCategory(type ,category, data) {
				$.each(data, function(key, post){
							addPostHTML(post, type, category);
					});

	}


	function addPostHTML(post, types, category) {
			$selector = $('.projectslist');
				var catsHTML = '';
				$.each(post.categorylist,  function(key, cat){
					catsHTML += ' <a href="'+ URL + LANG +'/posts/'+ categories[cat]['type'] +'/'+ cat +'" target="_blank">'+ categories[cat]['title'] +'</a>';
				});

				$selector.append('<div class="items">' +
					'<div class="itemover" style="background:'+ post.extras.color +'">'+
						'<div class="texts">'+
							'<h2>'+ post.title +'</h2>'+
							'<p>'+ catsHTML +
							'</p>'+
							'<a class="readmore" href="'+ URL + LANG +'/posts/'+ types	 +'/'+ category +'/view/'+ post.slug +'">'+ VIEW +'</a>'+
						'</div>'+
					'</div>'+
					'<img src="'+ post.thumb_image +'">'+
				'</div>');

	}

});
