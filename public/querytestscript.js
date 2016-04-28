/**
 * File - script.js
 * Authors - Matthew Schwartz, Andrew Gieraltowski, Alex Ulisky, John McDowell
 * Last Updated - 20 March 2016 - 17:18:00
 * Summary - This file contains the bulk of the Javascript functions in jQuery form
 */

/**
 * Function - sampleQuery
 */
 $(document).ready(function () {

 	// 
 	var dropdown_value = "null";
 	var subCat = "null";
 	
 	// Change the text of the dropdown menu when it is clicked
 	$(".dropdown-menu li a").click(function(){
 		$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
 		$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
 		dropdown_value = $(this).text();
 		console.log(dropdown_value);
 	});

 	// Button to query the database
 	$('#searchButton').click(function() {
 		// First clear all items in the results panel
 		$('#result-panel').empty();
 		if (dropdown_value == "null") {
 			alert("Please make a selection first!");
 			// no action
 		} else {
 			queryProduce();
 		}
 	});

	// Button to query the database after pressing the 'More!' button for a subcategory
	
	$('#result-panel').on("click", '#moreButton', function() {
		$('#result-panel').empty();
		subCat = $(this).parents(".panel panel-primary").find(".panel-heading").text();
		alert(subCat);
		moreQuery(subCat);
	});
 	// Button to clear the search results
 	$('#clearButton').click(function() {
 		$('#result-panel').empty();
 	});


 	// Button to force-add a result
 	$("#addButton").click(function () {
 		console.log("Attempting to add result...");
 		if( ($('#result-panel .col-sm-4').length+1) > 5) {
 			alert("Only 2 control-group allowed");
 			return false;
 		}
 		var id = ($('#result-panel .col-sm-4').length + 1).toString();
 		//$('#result-panel').append('<div class="control-group" id="control-group' + id + '"><label class="control-label" for="inputEmail' + id + '">Email' + id + '</label><div class="controls' + id + '"><input type="text" id="inputEmail' + id + '" placeholder="Email"></div></div>');
 		$('#result-panel').append('<div class="row"><div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading">BLACK FRIDAY DEAL</div><div class="panel-body"><img src="http://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div><div class="panel-footer">Buy 50 mobiles and get a gift card</div></div></div></div>');
 	});

 	// Button to remove a result
 	$("#removeButton").click(function () {
 		console.log("Attempting to remove result...");
 		if ($('#result-panel .col-sm-4').length == 1) {
 			console.log("[INFO] No more panels to remove!");
 			return false;
 		}

 		$('#result-panel .col-sm-4:last').remove();
 	});

 	// Runs a database query
 	function queryProduce () {
 		var rootRef = new Firebase('https://shopshop1.firebaseio.com/groceries/');	// create a reference to our database

 		rootRef.on("value", function(snap) {
 			var resultObj = snap.val();
 			var category = Object.keys(resultObj.produce);
 			var items = 0;
 			if (dropdown_value == "Fruit") {
	 			items = Object.keys(resultObj.produce.fruit);
	 		} else if (dropdown_value == "Vegetables") {
				items = Object.keys(resultObj.produce.vegetables);
	 		} else if (dropdown_value == "Soups"){
	 			items = Object.keys(resultObj.Canned.Soup);
	 		} else if (dropdown_value == "Cheese"){
	 			items = Object.keys(resultObj.Deli.Cheese);
	 		} else if (dropdown_value == "Meat"){
	 			items = Object.keys(resultObj.Deli.Meat);
	 		} else if (dropdown_value == "Milk"){
	 			items = Object.keys(resultObj.dairy.milk);
	 		} else if (dropdown_value == "Chocolate"){
	 			items = Object.keys(resultObj.Sweets.Chocolate);
	 		} else if (dropdown_value == "Cereal"){
	 			items = Object.keys(resultObj.Boxed.Cereal);
	 		} else {
	 			console.log("[ERROR] Unknown query");
	 		}
	 		for (var i = 0; i < items.length; i++) {
	 			appendPanel(category, items[i]);
	 		}
 		}, function (errorObject) {
 			console.log("The read failed: " + errorObject.code);
 		});
 	}

 	// Adds an item to the result-panel div
 	function appendPanel(resultCat, resultVal) {
 
 			$('#result-panel').append('<div class="row"><div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading">' + resultVal + '</div><div class="panel-body"><img src="images/' + resultVal + '.jpg" class="img-responsive" style="width:100%" alt="Image not found"></div><div class="panel-footer"><button id="moreButton" type="button" class="btn btn-secondary">More!</button></div></div></div></div>');
 	
 	}
	
	//Query database for items in subcategory
	function moreQuery(resultVal){
	var rootRef = new Firebase('https://shopshop1.firiebaseio.com/groceries/');
	rootRef.on("value", function(snap) {
 		var resultObj = snap.val();
 		var items = 0;
 		if (dropdown_value == "Fruit") {
				items = Object.keys(resultObj.produce.fruit.resultVal);
		} else if (dropdown_value == "Vegetables") {
			items = Object.keys(resultObj.produce.vegetables.resultVal);
		} else if (dropdown_value == "Soups"){
			items = Object.keys(resultObj.Canned.Soup.resultVal);
		} else if (dropdown_value == "Cheese"){
	 		items = Object.keys(resultObj.Deli.Cheese.resultVal);
	 	} else if (dropdown_value == "Meat"){
	 		items = Object.keys(resultObj.Deli.Meat.resultVal);
	 	} else if (dropdown_value == "Milk"){
	 		items = Object.keys(resultObj.dairy.milk.resultVal);
	 	} else if (dropdown_value == "Chocolate"){
	 		items = Object.keys(resultObj.Sweets.Chocolate.resultVal);
	 	} else if (dropdown_value == "Cereal"){
	 		items = Object.keys(resultObj.Boxed.Cereal.resultVal);
	 	} else {
	 		console.log("[ERROR] Unknown query");
	 	}
	 	for (var i = 0; i < items.length; i++) {
	 		appendPanelTwo(items[i]);
	 	}
 	}, function (errorObject) {
 		console.log("The read failed: " + errorObject.code);
 	});
 }

//Add objects to the panel
	function appendPanelTwo(resultVal){
		$('#result-panel').append('<div class="row"><div class="col-sm-4"><div class="panel panel-primary"><div class="panel-heading">' + resultVal + '</div><div class="panel-body"><img src="images/' + resultVal + '.jpg" class="img-responsive" style="width:100%" alt="Image not found"></div><div class="panel-footer"><button type="button" class="btn btn-secondary">Buy!</button></div></div></div></div>');
	}
 });

