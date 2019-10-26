import React from 'react';
import resume from "./data/me.json";
import Userinfo from "./components/Userinfo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Userinfo name={resume.name} email={resume.email} phoneNumber={resume.phoneNumber} location={resume.location} linkedin={resume.linkedin} github={resume.github} bio={resume.bio}/>
      </header>
    </div>
  );
}

export default App;
