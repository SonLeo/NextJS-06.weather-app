import axios from "axios";

export default function Home({ weather }) {
  return (
    <div className="container">
      <div className="content">
        <div className="heading">
          <h1>Hanoi</h1>
          <h2>{weather.weather[0].main}</h2>
        </div>

        <div className="main">
          <div className="main-img">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
          </div>
          <div className="main-temp">
            <p><span className="temp-value">{weather.main.temp}</span><span className="temp-unit">°C</span></p>
          </div>
        </div>

        <div className="detail">
          <div className="detail-info"><div>{weather.main.feels_like}°C</div><div>Feels like</div></div>
          <div className="detail-info"><div>{weather.main.humidity}%</div><div>Humidity</div></div>
          <div className="detail-info"><div>{weather.main.pressure} hPa</div><div>Pressure</div></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = 'ea1c6688c9d6144a25e3cd1c7453326d';
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=${API_KEY}`);

  return {
    props: {
      weather: res.data
    }
  };
}