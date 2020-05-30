$(document).ready(function () {
	console.log('ready!'); //-- inside document function to test JQuery ready

	var weatherSearch = [];
	var storedWeather = JSON.parse(localStorage.getItem("weather"))

	if (storedWeather === null) {
		console.log("Nothing here")
	} else if (storedWeather.length > 10) {
		for (i = storedWeather.length - 10; i < storedWeather.length; i++) {
			weatherSearch[weatherSearch.length] = storedWeather[i];
			createBtn(storedWeather[i].name)
		}
	} else {
		for (i = 0; i < storedWeather.length; i++) {
			weatherSearch[weatherSearch.length] = storedWeather[i];
			createBtn(storedWeather[i].name)
		}
	}


	$('#searchBtn').click(function (e) {
		e.preventDefault();
		// console.log('button clicked');

		var apiKey = '2c820066ae7ac5a97f92d60b8422d7ff';
		var cityName = $('#searchArea').val().trim();

		weatherSearch[weatherSearch.length] = {
			name: cityName
		}
		localStorage.setItem("weather", JSON.stringify(weatherSearch))
		createBtn(cityName)

		$("searchBtn").text("");

		// console.log(cityName);
		$.getJSON(
				//THIS WORKS
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=2c820066ae7ac5a97f92d60b8422d7ff`,
				function (data) {

					console.log(data);
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


					var temp1 = data.list[0].main.temp;
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

					//!! First Day Forecast
					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp1').append(temp1);
					$('.humidity1').append(humidity1);

					//!! Second Day Forecast
					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp2').append(temp2);
					$('.humidity2').append(humidity2);

					//!! Third Day Forecast
					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp3').append(temp3);
					$('.humidity3').append(humidity3);

					//!! Fourth Day Forecast
					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp4').append(temp4);
					$('.humidity4').append(humidity4);

					//!! Fifth Day Forecast
					$('.name').append(name);
					// $('.icon').attr('src', icon);
					$('.temp5').append(temp5);
					$('.humidity5').append(humidity5);
				}
			);


	});
	$(document).on("click", ".searchThis")

	function createBtn(cityName) {
		var newBtn = $("<button class = 'searchThis'>")
		newBtn.text(cityName)
		$(".searchHistory").prepend(newBtn)
	}
});

// API for 5 day forecast:  api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}