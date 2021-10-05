import { useState } from "react";

export default function Home({ data }) {
  const [city, setCity] = useState(data.location.name);
  const [region, setRegion] = useState(data.location.region);
  const [timeZone, setTimeZone] = useState(data.location.tz_id);
  const [temp, setTemp] = useState(data.current.temp_f);
  const [condition, setCondition] = useState(data.current.condition.text);
  const [icon, setIcon] = useState(data.current.condition.icon);
  const [test, setTest] = useState(null);

  return (
    <div className="container">
      <div className="location">
        <img src={icon} alt="icon" className="weather-icon" />
        <h1 className="location-timezone">{timeZone}</h1>
      </div>
      <div className="temperature">
        <div className="degree-section">
          <h2 className="temperature-degree">{temp}</h2>
          <span>F</span>
        </div>
        <div className="temperature-description">{condition}</div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const geoAPI = process.env.IP_DATA_API;
  const weatherAPI = process.env.WEATHER_API;

  // Obtain Geo Data
  const geoRes = await fetch(`https://api.ipdata.co?api-key=${geoAPI}`);
  const geoData = await geoRes.json();
  const city = await geoData.city;

  // Obtain Weather Data
  const weatherRes = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}&aqi=no`
  );
  const weatherData = await weatherRes.json();

  return {
    props: { data: weatherData },
  };
};
