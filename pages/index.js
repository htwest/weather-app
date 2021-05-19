export default function Home({ geo }) {
  console.log(geo);
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
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();
  // return {
  //   props: { users: data },
  // };
  const API = process.env.IP_DATA_API;

  const res = await fetch(`https://api.ipdata.co?api-key=${API}`);
  const data = await res.json();
  let lat = await data.latitude;
  let long = await data.longitude;

  return {
    props: { geo: { latitude: lat, longitude: long } },
  };
};
