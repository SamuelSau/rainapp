import API_KEY from "./config.js";

async function requestWeather(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    const data = await response.json()
    console.log(data)
    
}

/* function getTemperature
    //console.log(data.main.temp)
    function getDescription
    //console.log(data.weather[0].description)
    function getHumidity
    //console.log(data.main.temp)
    function getWindSpeed
    //console.log(data.wind.speed)
    function getPressure
    //console.log(data.main.pressure)

*/

requestWeather("Orlando");