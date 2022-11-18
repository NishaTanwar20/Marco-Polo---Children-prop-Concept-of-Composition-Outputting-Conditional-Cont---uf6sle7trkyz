import React  from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [text , setText] = useState(true);
  const handleClick = () => {
    setText(!text);
  }
  return (
    <div id="main">
      <h1 id="marco-polo">{text ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={handleClick}>
        {text ? "Polo" : "Marco"}
      </button>
    </div>
  )
}


export default App;
