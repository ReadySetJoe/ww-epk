import "./App.css";

function App() {
  return (
    <div className="background w-screen">
      <header className="w-full h-auto">
        <div className="bg-band-sketch bg-cover sm:h-96 h-32 bg-center"></div>
        <h1 className="md:p-10 p-5  text-center sm:text-8xl text-4xl">
          Hi, we're Wolfgang Wallace. We make music.
        </h1>
        <ul className="md:p-10 p-5 flex justify-around">
          <li>Music</li>
          <li>Photos</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </header>

      <div className="flex flex-col text-center border-t p-5">
        <p>This is some of the music we've made</p>
        <div className="flex flex-wrap flex-row w-auto">
          <iframe
            className="p-5 md:w-1/2"
            title="spotify-embed"
            src="https://open.spotify.com/embed/artist/4m3Bhxg7otGtBF7xsfTQTV"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            className="p-5 md:w-1/2"
            src="https://www.youtube.com/embed/playlist?list=PLZAc1n5gbD7nmPOeoTffM7VX1jln6ke-B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <footer>Some stuff</footer>
    </div>
  );
}

export default App;
