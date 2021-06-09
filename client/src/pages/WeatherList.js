import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import CreateItinerary from '../components/CreateItinerary';

function WeatherList() {

    const [weatherList, setWeatherList] = useState([]);

    // const [waveHeight, setWaveHeight] = useState({});

    useEffect(() => {
        API.getAllWeather()
        
        .then(weatherData => {

            var goodWeather = []

            for(let i=12; i<weatherData.data.hours.length; i+=24){
                console.log('Looping through weather data.',weatherData.data.hours[i]);
                goodWeather.push(weatherData.data.hours[i]) 
            }
            setWeatherList(goodWeather);
        })
     }, []);

    function celciusToFahrenheit(temperature){
        return ((temperature*(9/5))+32).toFixed(1);
    }
    function kphToMph(speed){
        return (speed/1.609344).toFixed(1);
    }
    function splitTime(time){
        return time.split("T");
    }
    function splitDate(date){
        return date.split("-");
    }

    return (
        <>
        <h1>Weather List</h1>
        {weatherList.map(weatherItem => (
            <div className="card" style={{"width": "18rem"}}>
            {/* {setWaveHeight(weatherItem.waveHeight)} */}
            <div className="card-body">
              <h5 className="card-title">{weatherItem.time}</h5>
              <p className="card-text">Water Temperature: {celciusToFahrenheit(weatherItem.waterTemperature.noaa)}° F</p>
              <p className="card-text">Wind Speed: {kphToMph(weatherItem.windSpeed.noaa)} Mph Direction:{weatherItem.windDirection.noaa}°</p>
              {/* <p className="card-text">{weatherItem.windDirection.noaa}°</p> */}
              {/* <p className="card-text">{weatherItem.waveHeight.meteo}</p> */}

              <CreateItinerary weatherDataStuff = {weatherItem}/>
              <a href="#" className="btn btn-secondary btn-sm">View Itinerary</a>
            </div>
          </div>
        ))}
        </>
    )
}

export default WeatherList;