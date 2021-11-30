import React from "react";

const More = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="heading-container">
          <h1 className="sections-heading">for more</h1>
        </div>
        <div className="social-container">
          <a
            className="social-link-big"
            aria-label="Go to profile on linkedin"
            href="https://www.linkedin.com/in/sofia-willebrand/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-container">
              <div className="circle-big">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <p className="social-heading">linkedin</p>
            </div>
          </a>
          <a
            className="social-link-big"
            aria-label="Go to profile on github"
            href="https://github.com/sofiawillebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-container">
              <div className="circle-big">
                <i className="fa fa-github"></i>
              </div>
              <p className="social-heading">github</p>
            </div>
          </a>
          <a
            className="social-link-big"
            aria-label="Go to profile on stackOverflow"
            href="https://stackoverflow.com/users/7478955/sofia-willebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-container">
              <div className="circle-big">
                <i className="fa fa-stack-overflow"></i>
              </div>
              <p className="social-heading">stack overflow</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default More;
