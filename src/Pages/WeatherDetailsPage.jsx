import { data, Link } from "react-router-dom";
import getYourLocationWeather from "../API calls/getYourLocationWeather";
import { useEffect, useState } from "react";
import Card from "../components/cards/Card";

function WeatherDetailsPage({placeName}){

    const [dataObject, setDataObject] = useState();

    useEffect(() => {
        getYourLocationWeather().then(
            function onSuccessHandler(data){
                setDataObject(data);                
            },
            function onRejectionHandler(){
                console.log("Cannot find data!!!")
            }
        );
    }, [])

    console.log("Data object:" ,dataObject);

    const sunRiseTime = dataObject ? new Date(dataObject.sunRise * 1000).toLocaleTimeString() : "Loading...";
    const sunSetTime = dataObject ? new Date(dataObject.sunSet * 1000).toLocaleTimeString() : "Loading...";
    console.log("Sunrise time", sunRiseTime);

    const temperature = dataObject ? Math.trunc(dataObject.temp) : "Loading...";
    const maxTemperature = dataObject ? Math.trunc(dataObject.maxTemp) : "Loading...";
    const minTemperature = dataObject ? Math.trunc(dataObject.minTemp) : "Loading...";

    const weatherCondition = dataObject ? dataObject.weatherType : "Loading...";

    const feelsLike = dataObject ? Math.trunc(dataObject.feelsLike) : "Loading...";
    const windSpeed = dataObject ? (dataObject.windSpeed * 3.6).toFixed(2) : "Loading...";
    const windDegree = dataObject ? dataObject.windDegree + " deg" : "Loading...";
    const humidity = dataObject ? dataObject.humidity+"%" : "Loading...";
    const pressure = dataObject ? Math.trunc(dataObject.pressure * 0.7500615).toFixed(0) +" mmHg" : "Loading..."
    const visibility = dataObject ? Math.trunc(dataObject.visibility / 1000) + "km" : "Loading...";

    return(
        <div className="h-[100dvh] w-[100dvw] bg-[url('SunnyWeather.png')] bg-cover flex flex-col justify-center  items-center">
            <div className="absolute top-5 ">
                <Link to="/">Weather Details Page</Link>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl tracking-wider">Home</h3>
                <h1 className="text-7xl font-bold tracking-wider">{placeName}</h1>
                <h3>{temperature}</h3>
                <h3>{weatherCondition}</h3>
                <div className="flex gap-5">
                    <h3>H: {maxTemperature}</h3>
                    <h3>L: {minTemperature}</h3>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 m-3 w-[80%] justify-around items-center">
                <Card text="FEELS LIKE" data={feelsLike} />
                <Card text="WIND" data={windSpeed} />
                <Card text="WIND DIRECTION" data={windDegree} />
                <Card text="HUMIDITY" data={humidity} />
                <Card text="PRESSURE" data={pressure} />
                <Card text="VISIBILITY" data={visibility} />
                <Card text="SUNRISE" data={sunRiseTime} />
                <Card text="SUNSET" data={sunSetTime} />
                
            </div>
            

        </div>
    );
}

export default WeatherDetailsPage;