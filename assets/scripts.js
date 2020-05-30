$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	// api.openweathermap.org/data/2.5/weather?q=Austin&appid=2c820066ae7ac5a97f92d60b8422d7ff
	// added &unitsimperial after Austin to convert
	// https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff
	// https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=2c820066ae7ac5a97f92d60b8422d7ff

	$('#searchBtn').click(function (e) {
		e.preventDefault();
		// console.log('button clicked');

		var apiKey = '2c820066ae7ac5a97f92d60b8422d7ff';
		var cityName = $('#searchArea').val();
		// console.log(cityName);
		$.getJSON(
			//THIS WORKS
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
			function (data) {
				// console.log(data);
				var name = data.name;
				// console.log(name);
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
			}
		),
			// weather API for UV, different from others, same site
			$.getJSON(
				//THIS WORKS
				`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=2c820066ae7ac5a97f92d60b8422d7ff` +
					name,
				function (data) {
					// console.log(data);
					var uv = Math.floor(data.current.uvi);
					$('.uv').append(uv);
				}
			),
			//  FIVE DAY - working on - just started
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					console.log(cityName);
					// var name = data.name;
					var temp1 = data.list[0].main.temp;
					console.log(temp1);
					var humidity1 = data.list[0].main.humidity;
					console.log(humidity1);

					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp1').append(temp1);
					$('.humidity1').append(humidity1);
				}
			);
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					console.log(cityName);
					// var name = data.name;
					var temp1 = data.list[0].main.temp;
					console.log(temp2);
					var humidity2 = data.list[0].main.humidity;
					console.log(humidity2);

					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp2').append(temp2);
					$('.humidity2').append(humidity2);
				}
			);
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					console.log(cityName);
					// var name = data.name;
					var temp1 = data.list[0].main.temp;
					console.log(temp3);
					var humidity3 = data.list[0].main.humidity;
					console.log(humidity3);

					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp3').append(temp3);
					$('.humidity3').append(humidity3);
				}
			);
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					console.log(cityName);
					// var name = data.name;
					var temp1 = data.list[0].main.temp;
					console.log(temp4);
					var humidity4 = data.list[0].main.humidity;
					console.log(humidity4);

					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp4').append(temp4);
					$('.humidity4').append(humidity4);
				}
			);
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					console.log(cityName);
					// var name = data.name;
					var temp1 = data.list[0].main.temp;
					console.log(temp5);
					var humidity2 = data.list[0].main.humidity;
					console.log(humidity5);

					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp5').append(temp5);
					$('.humidity5').append(humidity5);
				}
			);
	});
});

// API for 5 day forecast:  api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
