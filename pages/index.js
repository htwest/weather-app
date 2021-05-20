export default function Home({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className="location">
        <h1 className="location-timezone">Timezone</h1>
        <p>Icon</p>
      </div>
      <div className="temperature">
        <div className="degree-section">
          <h2 className="temperature-degree">34</h2>
          <span>F</span>
        </div>
        <div className="temperature-description">It's cold</div>
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
