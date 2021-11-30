import React from "react";

const OtherProject = (project) => {
  return (
    <article>
      <div>
        <a href="https://google.com" className="other-link">
          <p>
            <span className="project-heading-underline">
              {project.project.longname}
            </span>
            <span className="article-text-underline t">
              {project.project.description}
            </span>
          </p>
        </a>
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
