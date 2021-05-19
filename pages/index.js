export default function Home({ users }) {
  console.log(users);

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
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};
