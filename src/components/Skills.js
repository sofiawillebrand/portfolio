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
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript E6</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Styled components</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h2 className="project-heading">Toolbox</h2>
            <ul className="skill-list">
              <li>Atom</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>Keynote</li>
              <li>Slack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
