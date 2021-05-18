export default function Home() {
  return (
    <div className="container">
      <div className="location">
        <h1 className="location-timezone">Timezone</h1>
        <p>Icon</p>
      </div>
      <div className="temperature">
        <h2 className="temperature-degree">34</h2>
        <div className="temperature-description">It's cold</div>
      </div>
    </div>
  );
}
