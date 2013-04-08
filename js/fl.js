$(document).ready(function() {
	

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



var windowSize = $(window);

windowSize.resize(function() {
 
console.log(windowSize.width());

});