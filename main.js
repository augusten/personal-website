$(document).ready(function() {
	$( 'p#hello' ).hide( )
	$( '.project-list' ).hide( )
	$( 'p#contact-info' ).hide( )
	$( 'h1' ).fadeOut( )
	$( 'h1' ).fadeIn( 'slow' )
})

$( '#bg-cover-one' ).click(function( ){
	$( '#hello' ).slideToggle( 'slow' )
})


$( '#bg-cover-two' ).click(function( ){
	$( '.project-list' ).slideToggle( 'slow' )
})

$( '#bg-cover-three' ).click(function( ){
	$( 'p#contact-info' ).slideToggle( 'slow' )
})