/**
 * Created by joelmiller on 1/7/16.
 */

$(function(){
	$(".kickOff").on('click', function(){
		console.log('clicked!');
		$.ajax('/get/data').then(function(response){
			$(".content").append('<p>' + response + '</p>');
		});
	});
});



