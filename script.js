import API_KEY from './config.js';

async function requestWeather(cityName) {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`);
	const data = await response.json();
	return data;
}

function submitButton(){
    const submission = document.querySelector('button');

    submission.addEventListener('click', async () => {

    const userInput = document.querySelector('input').value;
    const data = await requestWeather(userInput);
    renderCity(data);
});
}

function renderCity(data) {
	const { name } = data;
	const { description, icon } = data.weather[0];
	const { temp, pressure, humidity } = data.main;
	const { speed } = data.wind;
	const { lon, lat } = data.coord;

	console.log(name, description, temp, pressure, humidity, speed, lon, lat)
	document.querySelector('.city').innerHTML = `${name}`;
	document.querySelector('.description').innerText = description;
	document.querySelector('img').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	document.querySelector('.temp').innerText = `${temp}℉`;
	document.querySelector('.pressure').innerText = `Pressure: ${pressure}`;
	document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
	document.querySelector('.wind').innerText = `Wind: ${speed}mph`;
	document.querySelector('.lon').innerText = `Longitude: ${lon}`;
	document.querySelector('.lat').innerText = `Latitude: ${lat}`;
}

submitButton();