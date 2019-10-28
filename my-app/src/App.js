import React from "react";
import resume from "./data/me.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.scss";
import Userinfo from "./components/Userinfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Employment from "./components/Employment";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/employment">Employment</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/skills">
            <Skills
              languages={resume.skills.languages}
              frameworks={resume.skills.frameworks}
              libraries={resume.skills.libraries}
              testingTools={resume.skills.testingTools}
            />
          </Route>
          <Route path="/projects">
            <Projects projects={resume.projects} />
          </Route>
          <Route path="/education">
            <Education education={resume.education} />
          </Route>
          <Route path="/employment">
            <Employment employment={resume.employment} />
          </Route>
          <Route path="/">
            <Userinfo
              name={resume.name}
              email={resume.email}
              phoneNumber={resume.phoneNumber}
              location={resume.location}
              linkedin={resume.linkedin}
              github={resume.github}
              bio={resume.bio}
            />
          </Route>
        </Switch>

        {/* use react router to display userinfo on homepage, with option to change to other sections, take whole page to display */}
      </div>
    </Router>
  );
}

export default App;
