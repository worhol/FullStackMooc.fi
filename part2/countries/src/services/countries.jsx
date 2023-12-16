import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const api_key = import.meta.env.VITE_WEATHER_KEY;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=48.2&lon=16.37&appid=${api_key}&units=metric`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getWeatherData = () => {
  const request = axios.get(weatherUrl);
  return request.then((response) => response.data);
};

export default { getAll, getWeatherData };
