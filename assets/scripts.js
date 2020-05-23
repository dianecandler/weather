$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready
	// Weather API
	var appID = "2c820066ae7ac5a97f92d60b8422d7ff"
// below is copied from homework
	$.ajax({
		url: queryURL,
		method: "GET"
	  }).then(function(response) {
		$("#movies-view").text(JSON.stringify(response));
	  });
});
