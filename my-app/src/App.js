import React from "react";
import resume from "./data/me.json";
import Userinfo from "./components/Userinfo";
import Skills from "./components/Skills";
import "./styles.scss";

function App() {
  console.log(resume.skills)
  return (
    <div className="App">
      <header className="App-header">
        <Userinfo
          name={resume.name}
          email={resume.email}
          phoneNumber={resume.phoneNumber}
          location={resume.location}
          linkedin={resume.linkedin}
          github={resume.github}
          bio={resume.bio}
        />
        <Skills languages={resume.skills.languages} frameworks={resume.skills.frameworks} libraries={resume.skills.libraries} testingTools={resume.skills.testingTools}/>
      </header>
    </div>
  );
}

export default App;
