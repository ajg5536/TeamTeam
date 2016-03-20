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
 	var ref = new Firebase("https://shopshop1.firebaseio.com/Fruit");
 	

 	$('#button').click(function() {
 		alert("You clicked a bootin");
 		ref.orderByChild("Fruit").equalTo(25).on("child_added", function(snapshot) {
 			console.log(snapshot.key());

 		});
 		console.log("I LOVE BUTTONS");
 	});

 });