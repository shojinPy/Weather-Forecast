const cityInput = document.querySelector('#input-city');
const searchButton = document.querySelector('#search-button');

// Credentials
let cityName;
const apiKey = 'b2dfe93a9ce4f94f1c42cc206a9fdab8';

searchButton.onclick = function(){
    try{
        if(cityInput.value!=""){
            cityName = cityInput.value;
            getWeather();
            getTemp();
        }
        else{
            throw new Error("Input field cannot be blank!")
        }
    }
    catch(err){
        console.error(err);
    }
}

async function getWeather(){
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const response = await fetch(apiLink).then(data => data.json());
    const weatherType = response.weather[0].main;
    const weatherIcon = response.weather[0].icon;
    try{
        if(response.cod==404){
            throw new Error("City not found.")
        }
        else{
            const parent = document.querySelector('#parent').classList;
            const weatherLabel = document.querySelector('#weather-label');
            const weatherImage = document.querySelector('#weather-icon');

            
            parent.remove("hidden");
            weatherLabel.textContent = weatherType;
            weatherImage.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`);
            weatherImage.setAttribute('alt', `${weatherType}-icon`);

            
        }
    }
    catch(err){
        console.log(err);
    }
}

async function getTemp(){
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const response = await fetch(apiLink).then(data => data.json());
    const temperature = response.main.temp-273.15;
    const feelTemp = response.main.feels_like-273.15;
    try{
        if(response.cod==404){
            throw new Error("City not found.")
        }
        else{
            const temp = document.querySelector('#temp');
            const tempDesc = document.querySelector('#temp-desc');

            temp.textContent = `${temperature.toFixed(1)}°c`;
            tempDesc.textContent = `Feels like: ${feelTemp.toFixed(1)}°c`;
        }
    }
    catch(err){
        console.log(err);
    }
}

