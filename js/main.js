const form = document.querySelector('#weatherForm')

form.addEventListener('submit', ( event ) => {
    event.preventDefault()
    let city_name = event.path[0][0].value;
    console.log(city_name)

    function weather(city_name) {
        // setup API key to get used and fetch the data for the weather
        const api_key = '9b61618a448e921002f1f1f890c77090';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
        // need response to return json
        .then(function(resp) {
            return resp.json()
        })
        // function to gather weather data and place them in sections
        .then(function(data) {
            // converting kelvin into fahrenheit
            var fahrenheit_max = Math.round(((parseFloat(data.main.temp_max)-273.15)*1.8)+32);
            var fahrenheit_min = Math.round(((parseFloat(data.main.temp_min)-273.15)*1.8)+32);

            // Having data go to empty sections of html by id        
            document.getElementById('cityData').innerHTML = data.name;
            document.getElementById('highData').innerHTML = fahrenheit_max + '&deg;';
            document.getElementById('lowData').innerHTML = fahrenheit_min + '&deg;';
            document.getElementById('forecastData').innerHTML = data.weather[0].description;
            document.getElementById('humidityData').innerHTML = data.main.humidity + '%';
            console.log(data)
        })
        .catch(function() {})
    }

    // call function weather to run when click button
    weather(city_name);
})