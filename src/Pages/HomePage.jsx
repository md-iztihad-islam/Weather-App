import { useNavigate } from "react-router-dom";
import getYourLocationName from "../API calls/getYourLoactionName";
import getYourLocationWeather from "../API calls/getYourLocationWeather";

function HomePage(){

    const navigate = useNavigate();

    const openYourLocation = () => {
        navigate("/weather");
        getYourLocationWeather();
        getYourLocationName();
        
    }

    const openDesiredLocation = () => {
        navigate("/weather")
    }

    return(
        <div className="bg-[url('HomePageBackground.jpg')] bg-cover bg-center h-[100dvh] w-[100dvw] text-white flex flex-col justify-center items-center">
            <div className="text-center space-y-4 mb-8">
                <div className="text-9xl font-bold tracking-widest">WEATHER APP</div>
                <div className="text-5xl tracking-wider font-semibold">Know About The Weather Of Your Surroundings And Beyond</div>
            </div>

            <div className="flex gap-5">
                <button 
                    className="flex justify-center items-center text-3xl h-[70px] w-[300px] bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6"
                    onClick={openYourLocation}
                >
                    Your Location
                </button>

                <button 
                    className="flex justify-center items-center text-3xl h-[70px] w-[300px] bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6"
                    onClick={openDesiredLocation}
                >
                    Desired Location
                </button>
            </div>
        </div>
    );
}

export default HomePage;