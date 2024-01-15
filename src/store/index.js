import { defineStore } from "pinia";
import { getWeatherData } from "@/api";

export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    city: "",
    weatherData: null,
    error: "",
  }),
  actions: {
    async getWeatherData(city) {
      try {
        const response = await getWeatherData(city);

        this.weatherData = response.data;
        this.city = city;
      } catch (error) {
        this.error = error.response.data.message;
        console.log(error);
      }
    },
  },
});
