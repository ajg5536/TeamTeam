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

 	
 	$("#removeButton").click(function () {
 		console.log("Attempting to remove result...");
 		if ($('#result-panel .col-sm-4').length == 1) {
 			console.log("[INFO] No more panels to remove!");
 			return false;
 		}

 		$('#result-panel .col-sm-4:last').remove();
 	});
	
 });