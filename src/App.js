import React, { useEffect } from 'react';
import GeoLocation from './components/GeoLocation';
import './App.css';

const api = {
  key: '8cbebc901b80c265712fb676fc023719',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});

  const search = e => {
    if (e.key === 'Enter') {
      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      fetch(`${api.base}weather?lat={36}&lon={-115}&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          // const temperature = Math.round((result.main.temp * 9) / 5 + 32);

          // console.log(temperature);
        });
    }
  };

  const lat = 36;
  const long = -115;

  useEffect(() => {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        const temperature = Math.round(
          ((result.main.temp - 273.15) * 9) / 5 + 32
        );

        console.log(temperature);
        // console.log(result);
      });
  }, []);

  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      {/* className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'App warm'
            : 'App'
          : 'App'
      }
    >
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='search'
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className='location-box'>
              <div className='location'>
                {weather.name}, {weather.sys.country}
              </div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <GeoLocation /> */}
    </div>
  );
}

export default App;

// React

// Open Weather Api

// Geolocation Api
