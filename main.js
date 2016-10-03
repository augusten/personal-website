$(document).ready(function() {
	$('p#hello').hide()
	$('p#project-list').hide()
	$('p#contact-info').hide()
})

$('h2#about').click(function(){
	$('p#hello').slideToggle('slow');
})

$('h2#project').click(function(){
	$('p#project-list').slideToggle('slow');
})

$('h2#contact').click(function(){
	$('p#contact-info').slideToggle('slow');
})
