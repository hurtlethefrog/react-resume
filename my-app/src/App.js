import React from 'react';
// import './App.css';
import Resume from "./data/me.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{Resume.firstName}</div>
      </header>
    </div>
  );
}

export default App;
