$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	// Local City Search Storage
	var weatherSearch = [];
	var storedWeather = JSON.parse(localStorage.getItem('weather'));

	if (storedWeather === null) {
		console.log('Nothing here');
	}
	else if (storedWeather.length > 10) {
		for (i = storedWeather.length - 10; i < storedWeather.length; i++) {
			weatherSearch[weatherSearch.length] = storedWeather[i];
			createBtn(storedWeather[i].name);
		}
	}
	else {
		for (i = 0; i < storedWeather.length; i++) {
			weatherSearch[weatherSearch.length] = storedWeather[i];
			createBtn(storedWeather[i].name);
		}
	}
	// Input City
	$('#searchBtn').click(function (e) {
		e.preventDefault();

		var apiKey = '2c820066ae7ac5a97f92d60b8422d7ff';
		var cityName = $('#searchArea').val().trim();

		weatherSearch[weatherSearch.length] = {
			name: cityName
		};
		localStorage.setItem('weather', JSON.stringify(weatherSearch));
		createBtn(cityName);

		$('searchBtn').text('');
		// Current Conditions - 1st weather API - city name, icon, temp, weather, humidity, wind
		$.getJSON(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
			function (data) {
				console.log(data); //using to collect data outside Postman

				var name = data.name;
				var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
				var temp = Math.floor(data.main.temp);
				var weather = data.weather[0].main;
				var humidity = data.main.humidity;
				var wind = Math.floor(data.wind.speed);

				$('.name').html('City of ' + name);
				$('.icon').attr('src', icon);
				$('.weather').append(weather);
				$('.temp').html('Temp: ' + temp + '°');
				$('.humidity').html('Humidity: ' + humidity + '%');
				$('.wind').html('Wind: ' + wind + 'mph');
			}
		),
			// 2nd weather API for UV, different from city, icon, temp, humidity, weather, wind
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=2c820066ae7ac5a97f92d60b8422d7ff` +
					name,
				function (data) {
					console.log(data); //using to collect data outside Postman
					var uv = Math.floor(data.current.uvi);
					$('.uv').html('UV Index: ' + uv);
				}
			),
			//  Five Day Forecast - collecting temp and humidity for 3rd Weather API
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data); //using to collect data outside Postman

					var temp1 = data.list[0].main.temp.toFixed(0);
					var humidity1 = data.list[0].main.humidity;

					var temp2 = data.list[8].main.temp.toFixed(0);
					var humidity2 = data.list[8].main.humidity;

					var temp3 = data.list[16].main.temp.toFixed(0);
					var humidity3 = data.list[16].main.humidity;

					var temp4 = data.list[24].main.temp.toFixed(0);
					var humidity4 = data.list[24].main.humidity;

					var temp5 = data.list[32].main.temp.toFixed(0);
					var humidity5 = data.list[32].main.humidity;

					// First Day Forecast
					$('.temp1').html('Temp: ' + temp1 + '°F');
					$('.humidity1').html('Humidity: ' + humidity1 + '%');

					// Second Day Forecast
					$('.temp2').html('Temp: ' + temp2 + '°F');
					$('.humidity2').html('Humidity: ' + humidity2 + '%');

					// Third Day Forecast
					$('.temp3').html('Temp: ' + temp3 + '°F');
					$('.humidity3').html('Humidity: ' + humidity3 + '%');

					// Fourth Day Forecast
					$('.temp4').html('Temp: ' + temp4 + '°F');
					$('.humidity4').html('Humidity: ' + humidity4 + '%');

					// Fifth Day Forecast
					$('.temp5').html('Temp: ' + temp5 + '°F');
					$('.humidity5').html('Humidity: ' + humidity5 + '%');
				}
			);
	});
	$(document).on('click', '#searchThis');
	// Create button and search for city
	function createBtn (cityName) {
		var newBtn = $("<button class = 'searchThis'>");
		newBtn.text(cityName);
		$('.searchHistory').prepend(newBtn);
	}
});
