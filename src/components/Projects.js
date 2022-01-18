import React from "react";

import FeaturedProject from "./FeaturedProject";
import OtherProject from "./OtherProject";

const Projects = (props) => {
  const { featuredProjects } = props;

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="heading-container">
          <h1 className="sections-heading">Featured Projects</h1>
        </div>
        <div className="main-projects">
          {featuredProjects.map(
            (project) =>
              project.featured &&
              project.display && (
                <FeaturedProject
                  project={project}
                  key={project.name}
                />
              )
          )}
        </div>

        <div className="heading-container">
          <h2 className="project-second-heading">Other Projects</h2>
        </div>

        {featuredProjects.map(
          (project) =>
            !project.featured &&
            project.display && (
              <OtherProject project={project} key={project.name} />
            )
        )}
      </div>
    </section>
  );
};

export default Projects;
