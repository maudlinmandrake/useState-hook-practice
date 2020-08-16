import React, { useState } from "react";

function App() {
  const [time, currentTime] = useState("Time");

  function getTime() {
    const time = new Date().toLocaleTimeString();
    currentTime(time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
