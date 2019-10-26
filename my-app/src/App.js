import React from "react";
import resume from "./data/me.json";
import "./styles.scss";
import Userinfo from "./components/Userinfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Employment from "./components/Employment";

function App() {
  console.log(resume.skills);
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
        <Skills
          languages={resume.skills.languages}
          frameworks={resume.skills.frameworks}
          libraries={resume.skills.libraries}
          testingTools={resume.skills.testingTools}
        />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
        <Employment employment={resume.employment} />
      </header>
    </div>
  );
}

export default App;
