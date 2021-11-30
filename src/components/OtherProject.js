import React from "react";

const OtherProject = (project) => {
  return (
    <article>
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

export default OtherProject;
