import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;
const API_Key = process.env.API_KEY;

app.use(express.static("public"));
const defaultLocation = "bangalore";

function mapCondition(condition){
    condition = condition.toLowerCase();
    if (condition.includes("sunny") || condition.includes("clear"))
        return "sunny-outline";
    else if(condition.includes("partly cloudy"))
        return "partly-sunny-outline";
    else if (condition.includes("cloudy") || condition.includes("fog"))
        return "cloud-outline";
    else if (condition.includes("thunder")) 
        return "thunderstorm-outline";
    else if (condition.includes("snow"))
        return "snow-outline";
    else if (condition.includes("rain") || condition.includes("drizzle"))
        return "rainy-outline";
    else
        return "water-outline";
}

app.get("/", async(req,res)=>{
    const locationQuery = req.query.location || defaultLocation;

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json`,{
            params:{
                key:API_Key,
                q:locationQuery,
                days:5
            }   
        });
        const data = response.data;
        const locationName = `${data.location.name}, ${data.location.region || data.location.country}`;
        const datee = new Date(data.location.localtime).toLocaleDateString("en-US", { //Human readable n fullform date
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          });
          const forecast = data.forecast.forecastday[0].day;
          const rainChance = data.forecast.forecastday[0].day.daily_chance_of_rain;

          res.render("index.ejs",{
            location: locationName,
            date: datee,
            temperature: Math.round(data.current.temp_c),
            humidity: data.current.humidity,
            wind: Math.round(data.current.wind_kph),
            rainPercent: rainChance,
            iconClass: mapCondition(data.current.condition.text),
            conditionText: data.current.condition.text,
            umbrellaAlert: rainChance > 50,
          });
        
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.render("index.ejs", {
          location: locationQuery, 
          error: "Failed to fetch weather data. Please check the city name and try again.",
        });
      }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});



