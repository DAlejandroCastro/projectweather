import React from "react";
import "./weatherInfo.css";

const WeatherInfo = ({
  weather,
  isCelsius,
  temperature,
  toggleTemperature,
}) => {
  return (
    <div className="card">
      <div className="first-content">
        <h1>
          Clima en {weather.name}, {weather.sys.country}
        </h1>
        <p>
          Temperatura actual: {temperature.toFixed(2)}° {isCelsius ? "C" : "F"}
        </p>
      </div>
      <div className="second-content">
        <p>Velocidad del Viento: {weather.wind.speed} m/s</p>
        <p>Porcentaje de Nubes: {weather.clouds.all}%</p>
        <p>Humedad: {weather.main.humidity}%</p>
        <p>Presión Atmosférica: {weather.main.pressure} hPa</p>
        
        <button className="button" onClick={toggleTemperature}>
          <p className="text">cambiar a °{isCelsius ? 'F' : 'C'}</p>
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
