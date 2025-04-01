// src/components/WeatherCard.tsx
import React from "react";
import { WeatherData } from "../data/types";
import { getTextColor } from "../utils/styles";

interface WeatherCardProps {
    weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
    const textColor = getTextColor(weather.condition);

    return (
        <div
            className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-gray-500/10 border border-gray-700/50
                 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl font-poppins"
        >
            {/* City and Condition */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1
                        className={`text-3xl font-extrabold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ${textColor}`}
                    >
                        {weather.city}
                    </h1>
                    <p className={`text-lg capitalize ${textColor}`}>
                        {weather.condition}
                    </p>
                </div>
                <img
                    src={weather.icon}
                    alt="Weather Icon"
                    className="w-16 h-16 animate-[spin_4s_linear_infinite] drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]"
                />
            </div>

            {/* Temperature and Additional Data (Side by Side) */}
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Temperature (Left) */}
                <div className="flex-1 text-center">
                    <p
                        className={`text-6xl font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ${textColor}`}
                    >
                        {weather.temp}°F
                    </p>
                    <p className={`text-sm mt-2 ${textColor}`}>
                        Feels like {weather.feelsLike}°F
                    </p>
                </div>

                {/* Additional Data (Right) */}
                <div className="w-full sm:w-56 space-y-3">
                    <div className="flex justify-between items-center border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/10 transition-colors">
                        <p className={`text-sm ${textColor}`}>Humidity</p>
                        <p className={`text-lg font-semibold ${textColor}`}>
                            {weather.humidity}%
                        </p>
                    </div>
                    <div className="flex justify-between items-center border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/10 transition-colors">
                        <p className={`text-sm ${textColor}`}>Wind Speed</p>
                        <p className={`text-lg font-semibold ${textColor}`}>
                            {weather.windSpeed} mph
                        </p>
                    </div>
                    <div className="flex justify-between items-center border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/10 transition-colors">
                        <p className={`text-sm ${textColor}`}>Pressure</p>
                        <p className={`text-lg font-semibold ${textColor}`}>
                            {weather.pressure} hPa
                        </p>
                    </div>
                    <div className="flex justify-between items-center border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/10 transition-colors">
                        <p className={`text-sm ${textColor}`}>Sunrise</p>
                        <p className={`text-lg font-semibold ${textColor}`}>
                            {weather.sunrise}
                        </p>
                    </div>
                    <div className="flex justify-between items-center border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/10 transition-colors">
                        <p className={`text-sm ${textColor}`}>Sunset</p>
                        <p className={`text-lg font-semibold ${textColor}`}>
                            {weather.sunset}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;