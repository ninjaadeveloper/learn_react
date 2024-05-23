import React, { useState, useEffect } from 'react'

export const WeatherFunction = () => {

    const [city, setCity] = useState('Karachi');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const apiKey = 'dfd89e7ec675397789419d3b0a86f3e5';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError('City not found');
            setWeatherData(null);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    console.log(weatherData)
    console.log(error)

    function handleSearch() {
        if (city.trim() !== '') {
            fetchWeather();
        }
    }


    return (
        <>
            <div class="bg-indigo-300">
                <div className='min-h-screen flex items-center justify-center'>
                    <div>
                        <div class=" bg-white p-4 w-full max-w-xs rounded-lg shadow-lg">
                            <h2 className='text-center my-3 font-bold text-2xl text-indigo-500'>Weather Forecaster</h2>
                            <div class="font-bold text-xl">{weatherData?.name}</div>
                            <div class="text-sm text-gray-500">{weatherData?.sys.country}</div>
                            <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                                <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div class="flex flex-row items-center justify-center mt-6">
                                <div class="font-medium text-6xl">{weatherData?.main.temp}</div>
                                <div class="flex flex-col items-center ml-6">
                                    <div>Cloudy</div>
                                    <div class="mt-1">
                                        <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
                                        <span class="text-sm font-light text-gray-500">{weatherData?.weather[0].main}</span>
                                    </div>
                                    <div>
                                        <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
                                        <span class="text-sm font-light text-gray-500">{weatherData?.weather[0].description}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row justify-between mt-6">
                                <div class="flex flex-col items-center">
                                    <div class="font-medium text-sm">Wind</div>
                                    <div class="text-sm text-gray-500">{weatherData?.wind.speed} / h</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="font-medium text-sm">Humidity</div>
                                    <div class="text-sm text-gray-500">{weatherData?.main.
                                        humidity
                                    }%</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="font-medium text-sm">Visibility</div>
                                    <div class="text-sm text-gray-500">{weatherData?.visibility / 1000} km </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <input type="text" className='shadow-sm mt-2 rounded-md w-52 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Search City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <button className="w-24 ml-4 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleSearch}
                            >Search</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
