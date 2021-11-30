import React from "react";

const OtherProject = (project) => {
  return (
    <article>
      <div>
        <p className="article-text">
          <a
            href={project.project.github}
            className="other-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-heading-underline">
              {project.project.longname}
            </span>
          </a>
          <span className="article-text-underline">
            {project.project.description}
          </span>
        </p>

        <div className="code-tags">
          {project.project.tags.map((tag) => (
            <span className="code-tag-text" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default OtherProject;
