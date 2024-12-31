import axios from "axios";

async function getYourLocationWeather(){
    if(navigator.geolocation){
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
    
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fbc8ab8b625d89aac3108c8720f8671b&units=metric`);
    
                    const responseData = response.data;

                    const output = {
                        temp: responseData.main.temp,
                        maxTemp: responseData.main.temp_max,
                        minTemp: responseData.main.temp_min,
                        feelsLike: responseData.main.feels_like,
                        humidity: responseData.main.humidity,
                        pressure: responseData.main.pressure,
                        sunRise: responseData.sys.sunrise,
                        sunSet: responseData.sys.sunset,
                        visibility: responseData.visibility,
                        weatherType: responseData.weather[0].main,
                        windSpeed: responseData.wind.speed,
                        windDegree: responseData.wind.deg,
                    }

                    console.log("output", responseData);
    
                    resolve(output);       
                    reject("Cannot find data!!!");         
                }
            );
        })
    }
}

export default getYourLocationWeather;