import React from "react";

const More = () => {
  return (
    <section class="portfolio-section">
      <div class="container">
        <div class="heading-container">
          <h1 class="sections-heading">for more</h1>
        </div>
        <div class="social-container">
          <a
            class="social-link-big"
            aria-label="Go to profile on linkedin"
            href="https://www.linkedin.com/in/sofia-willebrand/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon-container">
              <div class="circle-big">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <p class="social-heading">linkedin</p>
            </div>
          </a>
          <a
            class="social-link-big"
            aria-label="Go to profile on github"
            href="https://github.com/sofiawillebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon-container">
              <div class="circle-big">
                <i class="fa fa-github"></i>
              </div>
              <p class="social-heading">github</p>
            </div>
          </a>
          <a
            class="social-link-big"
            aria-label="Go to profile on stackOverflow"
            href="https://stackoverflow.com/users/7478955/sofia-willebrand"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon-container">
              <div class="circle-big">
                <i class="fa fa-stack-overflow"></i>
              </div>
              <p class="social-heading">stack overflow</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default More;
