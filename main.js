$(document).ready(function() {
	$( 'p#hello' ).hide( )
	$( '.project-list' ).hide( )
	$( 'p#contact-info' ).hide( )
	$( 'h1' ).fadeOut( )
	$( 'h1' ).fadeIn( 'slow' )
})

$( 'h2#about' ).click(function(){
	$( 'p#hello' ).slideToggle( 'slow' );
})

$( 'h2#project' ).click(function( ){
	$( '.project-list' ).slideToggle( 'slow' );
})

$( 'h2#contact' ).click(function( ){
	$( 'p#contact-info' ).slideToggle( 'slow' );
})
