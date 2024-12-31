import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import WeatherDetailsPage from "../../Pages/WeatherDetailsPage";
import ForecastPage from "../../Pages/ForecastPage";
import getYourLocationName from "../../API calls/getYourLoactionName";
import { useEffect, useState } from "react";
import ErrorPage from "../../Pages/ErrorPage";
import getYourLocationWeather from "../../API calls/getYourLocationWeather";

function Routing(){

    const [locationName, setLocationName] = useState("");
    const [reject, setReject] = useState(false);

    useEffect(() => {
        getYourLocationName().then(
            function onSuccessHandler(placeName){
                setLocationName(placeName);
            },
            function onRejectionHandler(){
                setReject(true);
            }
        )
    }, [])

    if(reject){
        return <ErrorPage />
    }

    useEffect(() => {
        getYourLocationWeather().then(
            function onSuccessHandler(){

            }
        )
    })



    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherDetailsPage placeName={locationName} />} />
            <Route path="/weather/forecast" element={<ForecastPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Routing;