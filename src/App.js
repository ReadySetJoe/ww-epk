import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="background">
        <p>Hi, we're Wolfgang Wallace. We make music.</p>
        <iframe
          title="spotify-embed"
          src="https://open.spotify.com/embed/artist/4m3Bhxg7otGtBF7xsfTQTV"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
