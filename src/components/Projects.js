import React from "react";

import FeaturedProject from "./FeaturedProject";

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
              project.featured && (
                <FeaturedProject project={project} />
              )
          )}
        </div>

        <div className="heading-container">
          <h2 className="project-second-heading">Other Projects</h2>
        </div>

        {featuredProjects.map(
          (project) =>
            !project.featured && (
              <article>
                <div>
                  <a href="https://google.com" className="other-link">
                    <p>
                      <span className="project-heading-underline">
                        {project.longname}
                      </span>
                      <span className="article-text-underline t">
                        {project.description}
                      </span>
                    </p>
                  </a>
                  <div className="code-tags">
                    {project.tags.map((tag) => (
                      <span className="code-tag-text">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default Projects;
