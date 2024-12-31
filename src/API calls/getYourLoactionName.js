import axios from "axios";

async function getYourLocationName(){
    if(navigator.geolocation){
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                async function location(position){
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
    
                    const responseAreaName = await axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode`,
                        {
                            params: {
                                location: `${lon},${lat}`,
                                f: "json",
                                langCode: "en"
                            }
                        }
                    );
    
                    const responseAreaNameData = responseAreaName.data.address.PlaceName;
                    //console.log("Type of: " ,typeof(responseAreaNameData));
    
                    resolve(responseAreaNameData);
                    reject("Cannot detect location!!!");
                }
            )
        })
    }
}

export default getYourLocationName;