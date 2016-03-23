/**
 * File - script.js
 * Authors - Matthew Schwartz, Andrew Gieraltowski, Alex Ulisky, John McDowell
 * Last Updated - 20 March 2016 - 17:18:00
 * Summary - This file contains the bulk of the Javascript functions in jQuery form
 */

/**
 * Function - sampleQuery
 */

 $(document).ready(function() {
 	var myFirebaseRef = new Firebase("https://shopshop1.firebaseio.com/");
    //myFirebaseRef.set({name: 'bober', text: 'likes cheese'});
 	

 	$('#button').click(function() {
 		var thiscat = $('#category').val();
 		var thisprod = $('#name').val();

 		myFirebaseref.push({category: thiscat, name: thisprod})

 		console.log("Attempting to add " + thiscat ":" + thisprod + " to the database...");
 		
 	});

 });