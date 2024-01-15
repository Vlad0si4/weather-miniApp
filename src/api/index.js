import axios from "axios";

const API_KEY = "641e7994f43a37b4f074899c21386521";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getWeatherData(city) {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
}
