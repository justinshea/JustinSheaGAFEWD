$(document).ready(function() {
	
	// var circleName
	// var direction 

	// $('.circle_wrapper').attr('class').split(' ')[1]);

	// if (circleName == '.circle_one') {
	// 	direction = 'right';	
	// }

	// else if (circleName == '.circle_two') {
	// 	direction = 'top';	
	// }

	// else if (circleName == '.circle_two') {
	// 	direction = 'right';	
	// }

	// else if (circleName == undefined) {
	// 	direction = 'bottom';	
	// }

	$('.circle').tooltip({
		html: true,
		title: function() {
			// return $('.circle_description').html();
			return $(this).parent().find('.circle_description').html();
		},
		delay: { show: 200, hide: 200}
	});



	$('.circle').hover(
	function() {
   		$(this).css('opacity', '.65');
   	},
	function() {
   		$(this).css('opacity', '.35');
	}

);


	$('.dropdown-toggle').dropdown();


});