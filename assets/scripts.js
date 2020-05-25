$(document).ready(function () {
	// console.log('ready!'); //-- inside document function to test JQuery ready

	// api.openweathermap.org/data/2.5/weather?q=Austin&appid=2c820066ae7ac5a97f92d60b8422d7ff
	// added &unitsimperial after Austin to convert
	// https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff
	// https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=2c820066ae7ac5a97f92d60b8422d7ff

	// $("#searchBtn").click( function(e){
	//     e.preventDefault();

	//     var apiKey = "2c820066ae7ac5a97f92d60b8422d7ff";
	//     var cityName = $("#searchArea").val();
	//     var weatherQuery =
	//     "https://api.openweathermap.org/data/2.5/forecast?q=" +
	//     cityName +
	//     "&appid=" +
	//     apiKey;

	//     $.ajax({
	//         url: weatherQuery,
	//         method: "GET"
	//         })
	//         .then(function (res) {
	//             console.log(res.city.name); //(res.name)
	// above worked to line 8
	// $("#city1").text(res.name)
	// $("#temp").text(res.main.temp)
	//         })

	// })
	// })
	// Current forecast and five day forecast for icon, description (weather), temp, humidity
	$.getJSON(
		'https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff',
		function (data) {
			console.log(data);
			var name = data.name;
			var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
			var temp = Math.floor(data.main.temp);
			var weather = data.weather[0].main;
			var humidity = data.main.humidity;
			var wind = Math.floor(data.wind.speed);

			$('.name').append(name);
			$('.icon').attr('src', icon);
			$('.weather').append(weather);
			$('.temp').append(temp);
			$('.humidity').append(humidity);
			$('.wind').append(wind);
		},
		// weather API for UV, different from others, same site
		$.getJSON(
			'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=2c820066ae7ac5a97f92d60b8422d7ff' +
				name,
			function (data) {
				console.log(data);
				var uv = Math.floor(data.current.uvi);
				$('.uv').append(uv);
			}
		)
	);
});

// $(document).ready(function () {
// 	console.log('ready!'); //-- inside document function to test JQuery ready
// 	// Weather API
// 	var appID = "2c820066ae7ac5a97f92d60b8422d7ff"
// // below is copied from homework
// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	  }).then(function(response) {
// 		$("#movies-view").text(JSON.stringify(response));
//  });
