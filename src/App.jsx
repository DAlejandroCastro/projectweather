import { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo";
import Loading from "./components/Loading";
import Error from "./components/Error";
import SearchBar from "./components/SearchBar";
import "./App.css";
const Key = 'e788895b92995ecb41742a7bbabb7ccf'



function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, handleError);

      function success(position) {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
      }

      function handleError(err) {
          console.log(err);
          setError('No se pudo obtener la ubicación');
          setLoading(false);
      }
  }, []);

  
  const fetchWeather = async (lat, lon) => {
      try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}&units=metric`);
          setWeather(response.data);
      } catch (err) {
          console.error(err);
          setError('Error al obtener datos del clima');
      } finally {
          setLoading(false);
      }
  };

  const fetchWeatherByCity = async(city) =>{
    setLoading(true);
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`);
        setWeather(response.data);
        setError(null);
    } catch (err) {
        console.log(err);
        setError('Error al obtener datos del clima');
    } finally {
        setLoading(false);
    }
  }

  const toggleTemperature = () => {
      setIsCelsius(!isCelsius);
  };

  if (loading) return <Loading/>;
  if (error) return <Error message={error} />;

  const temperature = isCelsius
      ? weather.main.temp
      : (weather.main.temp * 9/5) + 32;

  return (
    <div className="app">
        <header className="app-header">
        <h1 className="title">Weather App</h1>
        <SearchBar onSearch={fetchWeatherByCity}/>
        </header>
        <WeatherInfo 
          weather={weather} 
          isCelsius={isCelsius} 
          temperature={temperature} 
          toggleTemperature={toggleTemperature} 
        />
    </div>
  );
}

export default App;
