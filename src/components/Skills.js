import React from "react";

const Skills = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="heading-container">
          <h1 className="sections-heading">Skills</h1>
        </div>
        <div className="skill-list-container">
          <div>
            <h2 className="project-heading">Code</h2>
            <ul className="skill-list">
              <li>html5</li>
              <li>css3</li>
              <li>JavaScript E6</li>
              <li>React</li>
              <li>Styled components</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h2 className="project-heading">Toolbox</h2>
            <ul className="skill-list">
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>Keynote</li>
              <li>Slack</li>
            </ul>
          </div>
          <div>
            <h2 className="project-heading">Upcoming</h2>
            <ul className="skill-list">
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
