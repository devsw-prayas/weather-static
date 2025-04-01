// src/App.tsx
import React from "react";
import WeatherCard from "./components/WeatherCard";
import {getBgGradient} from "./utils/styles.ts";
import { WeatherData } from "./data/types";

const App: React.FC = () => {
    // Hardcoded weather data
    const weather: WeatherData = {
        city: "New York",
        temp: 73,
        condition: "Sunny",
        humidity: 65,
        windSpeed: 8,
        feelsLike: 70,
        icon: "https://img.icons8.com/color/48/000000/sun--v1.png",
        pressure: 1012,
        sunrise: "6:30 am",
        sunset: "7:45 pm"
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${getBgGradient(
                weather.condition
            )} p-4 animate-gradient`}>
            <WeatherCard weather={weather}/>
        </div>
    );
};

export default App;