import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <section className="header-icons">
          <a
            className="social-link"
            aria-label="Go to profile on linkedin"
            href="https://www.linkedin.com/in/sofia-willebrand/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circle">
              <i className="fab fa-linkedin-in"></i>
            </div>
          </a>
          <a
            className="social-link"
            aria-label="Go to profile on stackOverflow"
            href="https://stackoverflow.com/users/7478955/sofia-willebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circle">
              <i className="fa fa-stack-overflow"></i>
            </div>
          </a>
          <a
            className="social-link"
            aria-label="Go to profile on github"
            href="https://github.com/sofiawillebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circle">
              <i className="fa fa-github"></i>
            </div>
          </a>
        </section>
        <div className="header-text-container">
          <p className="header-name">
            portfolio:{" "}
            <span className="bold-style">sofia willebrand</span>
          </p>
          <p className="header-title">
            frontend
            <br /> developer
          </p>
          <p className="header-underscore color">+ ecologist </p>
          <p className="header-underscore">+ GIS Analyst </p>
        </div>
        <img
          src="./assets/profile-image.jpg"
          alt="profile of Sofia Willebrand"
          className="header-profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
