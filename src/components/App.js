import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("");
  let sig = null;
  const handleClick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
    sig = true;
  };
  return (
    <div id="main">
      <button id="click" onClick={() => handleClick()}></button>
      <p id="para">{para}</p>
    </div>
  );
}

export default App;
