import React, { useState } from "react";
import "./App.css";
import urls from "./urls";

function App() {
  const [idx, setIdx] = useState(0);
  const handleNext = () => {
    setIdx((n) => (n + 1) % urls.length);
  };
  const handlePrev = () => {
    setIdx((n) => (n - 1) % urls.length);
  };

  return (
    <div className="App">
      <div className="text">
        <h1 className="big">darren's playlist</h1>
        <p className="desc">Just your average spotify playlist.</p>
      </div>
      <iframe
        className="playlist"
        src={urls[idx]}
        title="sp-playlist"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <div className="btn-container">
        <button className="btn prev" onClick={handlePrev}>
          {"<"}
        </button>
        <button className="btn next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default App;
