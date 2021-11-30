import React from "react";

const FeaturedProject = (project) => {
  return (
    <article>
      <a
        className="project-link"
        aria-label="Go to project"
        href={project.project.netlify}
        target="_blank"
        rel="noreferrer"
      >
        <div className="image-container">
          <div className="overlay">
            <p className="overlay-text">{project.project.name}</p>
          </div>
          <img
            className="image"
            src={project.project.imagesrc}
            alt=""
          />
        </div>
      </a>
      <a href={project.project.github} className="project-heading">
        {project.project.longname}
      </a>
      <p className="article-text">{project.project.description}</p>
      <div className="code-tags">
        {project.project.tags.map((tag) => (
          <span className="code-tag-text" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default FeaturedProject;
