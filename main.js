$(document).ready(function() {
	$( '.profile' ).hide( )
	$( '.project-list' ).hide( )
	$( '.contact-info' ).hide( )
	$( 'h1' ).hide( )
	$( 'h1' ).fadeIn( 'slow' )
})

$( '#bg-cover-one' ).click(function( ){
	$( '.profile' ).slideToggle( 'slow' )
})

$( '#bg-cover-two' ).click(function( ){
	$( '.project-list' ).slideToggle( 'slow' )
})

$( '#bg-cover-three' ).click(function( ){
	$( '.contact-info' ).slideToggle( 'slow' )
})