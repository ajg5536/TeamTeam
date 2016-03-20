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
 	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
 	ref.orderByChild("Fruit").equalTo(25).on("child_added", function(snapshot) {
 		console.log(snapshot.key());
 	});

 	$('#button').click(function() {
 		alert("You clicked a bootin");
 	});

 });