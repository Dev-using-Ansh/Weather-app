async function getweather() {

    try {
        let input = document.getElementById("city");
        if(input.value === ""){
            alert("Write city Name");
            throw new Error("Write a city name");
        }
        let city = input.value;
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1faa6a72684712106018a68314f2d07e";
        let response = await fetch(url);
        // if (!response.ok) {
        //     // alert("Data not found");
            
        // }
        let jsondata = await response.json();
        console.log(jsondata);  // Print the fetched data to console to verify



        const weather_img = document.querySelector('.weather-img');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector('.humidity');
        const wind_speed = document.querySelector('.wind-speed');

        if (jsondata.cod === "404") {
            alert(jsondata.message);
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const tempC = jsondata.main.temp - 273.35;
        temperature.innerHTML = tempC.toFixed(1) + "°C";
        description.innerHTML = jsondata.weather[0].description;
        humidity.innerHTML = jsondata.main.humidity + "%";
        wind_speed.innerHTML = jsondata.wind.speed + "km.h";
        if (jsondata.weather[0].main === "Clouds") {
            weather_img.src = "https://cdn0.iconfinder.com/data/icons/hotel-and-travel-2-1/52/56-512.png";

        }
        else if (jsondata.weather[0].main === "Clear") {
            weather_img.src = "https://www.pngarts.com/files/4/Sun-PNG-Image.png";

        }
        else if (jsondata.weather[0].main === "Rain") {
            weather_img.src = "http://cliparts.co/cliparts/kcK/n48/kcKn48EXi.png";

        }
        else if (jsondata.weather[0].main === "Mist") {
            weather_img.src = "https://cdn0.iconfinder.com/data/icons/weather-402/15/Vector-8-512.png";

        }
        else if (jsondata.weather[0].main === "Smoke") {
            weather_img.src = "https://webstockreview.net/images/clipart-snow-snow-cloud-12.png";

        }
    } catch (error) {
        console.log(error.message);
    }
}