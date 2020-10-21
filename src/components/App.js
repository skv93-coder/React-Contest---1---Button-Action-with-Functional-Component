import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [sig, setPara] = useState(false);

  const handleClick = () => {
    setPara(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={() => handleClick()}>
        {sig ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </button>
    </div>
  );
}

export default App;
