$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	var weatherSearch = [];
	var storedWeather = JSON.parse(localStorage.getItem('weather'));

	if (storedWeather === null) {
		console.log('Nothing here');
	}
	else if (storedWeather.length > 10) {
		// Better way to do this if time instead of loops:  var len = storedWeather.length>10 ? 10: storedWeather.length
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

	$('#searchBtn').click(function (e) {
		e.preventDefault();
		// console.log('button clicked');

		var apiKey = '2c820066ae7ac5a97f92d60b8422d7ff';
		var cityName = $('#searchArea').val().trim();

		weatherSearch[weatherSearch.length] = {
			name: cityName
		};
		localStorage.setItem('weather', JSON.stringify(weatherSearch));
		createBtn(cityName);

		$('searchBtn').text('');

		$.getJSON(
			//THIS WORKS
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
				console.log(name);
				$('.icon').attr('src', icon);
				$('.weather').append(weather);
				$('.temp').html('Temp: ' + temp + '°');
				$('.humidity').html('Humidity: ' + humidity + '%');
				$('.wind').html('Wind: ' + wind + 'mph');
			}
		),
			// weather API for UV, different from city, icon, temp, humidity, weather, wind
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=2c820066ae7ac5a97f92d60b8422d7ff` +
					name,
				function (data) {
					// console.log(data);
					var uv = Math.floor(data.current.uvi);
					$('.uv').html('UV Index: ' + uv);
				}
			),
			//  Five Day Forecast
			$.getJSON(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {
					console.log(data);
					// var date1 = data.list[0].dt_txt;
					var temp1 = data.list[0].main.temp.toFixed(0);
					console.log(temp1);
					var humidity1 = data.list[0].main.humidity;
					console.log(humidity1);
					var temp2 = data.list[8].main.temp;
					var humidity2 = data.list[8].main.humidity;
					var temp3 = data.list[16].main.temp;
					var humidity3 = data.list[16].main.humidity;
					var temp4 = data.list[24].main.temp;
					var humidity4 = data.list[24].main.humidity;
					var temp5 = data.list[32].main.temp;
					var humidity5 = data.list[32].main.humidity;
					var now = moment().format('LL');
					var now2 = moment().add(1, 'days');
					var now3 = moment().add(2, 'days');
					var now4 = moment().add(3, 'days');
					var now5 = moment().add(4, 'days');
					console.log(now2);
					// First Day Forecast

					$('.date1').append(now);
					$('.date2').append(now2);
					$('.temp1').append(temp1 + '°F');
					$('.humidity1').append(humidity1 + '%');
					console.log(data);
					// Second Day Forecast

					// $('.icon').attr('src', icon);
					$('.temp2').append(temp2 + '°F');
					$('.humidity2').append(humidity2 + '%');

					// Third Day Forecast
					$('.date3').append(now3);
					$('.temp3').append(temp3 + '°F');
					$('.humidity3').append(humidity3 + '%');

					// Fourth Day Forecast
					$('.date4').append(now4);
					// $('.icon').attr('src', icon);
					$('.temp4').append(temp4 + '°F');
					$('.humidity4').append(humidity4 + '%');

					// Fifth Day Forecast
					$('.date5').append(now5);
					// $('.icon').attr('src', icon);
					$('.temp5').append(temp5 + '°F');
					$('.humidity5').append(humidity5 + '%');
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

// API for 5 day forecast:  api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
