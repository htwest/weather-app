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

  const res = await fetch(
    "https://api.ipdata.co?api-key=e9cd3843d383b6b62076b7b7fa9c8c83d210725ad5332d8db4ef3e0a"
  );
  const data = await res.json();
  let lat = await data.latitude;
  let long = await data.longitude;

  return {
    props: { geo: { latitude: lat, longitude: long } },
  };
};
