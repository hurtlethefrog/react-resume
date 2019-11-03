import React from "react";
import resume from "./data/me.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.scss";
import Userinfo from "./components/Userinfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Guestbook from "./components/Guestbook";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav">
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
              <Link to="/guestbook">Guestbook</Link>
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
          <Route path="/guestbook">
            <Guestbook />
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
              education={resume.education}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
