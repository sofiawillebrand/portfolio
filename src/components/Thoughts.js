import React from "react";

const Thoughts = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="heading-container">
          <h1 className="sections-heading">
            My thoughts{" "}
            <span className="heading-big-screen"> about code</span>
          </h1>
        </div>

        <div className="thoughts-container">
          <article>
            <div className="image-container">
              <img
                className="image"
                src="./images/image_6.png"
                alt=""
              />
            </div>
            <div>
              <p className="thoughts-date">dec 2019</p>
              <h2 className="thoughts-header">
                How to stop being scared: learning to love code
              </h2>
              <p className="article-text">
                Writing code is less about “just working”. Instead,
                it’s much more about creativity. It’s similar to
                creative writing in that the author architecting a
                story must use an assortment of tools and components
                (i.e., content) in a way to satisfy a particular
                objective.{" "}
              </p>
            </div>
          </article>

          <article>
            <div className="image-container">
              <img
                className="image"
                src="./images/image_6.png"
                alt=""
              />
            </div>
            <div>
              <p className="thoughts-date">dec 2019</p>
              <h2 className="thoughts-header">
                How to stop being scared: learning to love code
              </h2>
              <p className="article-text">
                Writing code is less about “just working”. Instead,
                it’s much more about creativity. It’s similar to
                creative writing in that the author architecting a
                story must use an assortment of tools and components
                (i.e., content) in a way to satisfy a particular
                objective.{" "}
              </p>
            </div>
          </article>
        </div>

        <div className="heading-container">
          <h2 className="project-second-heading">More thoughts</h2>
        </div>
        <a href="https://google.com" className="other-link">
          <p>
            <span className="thoughts-date-underline">sep 2019.</span>
            {/* style={{"font-weight: bold"}} */}
            <span className="article-text-underline">
              {" "}
              5 apps that making coding easier
            </span>
          </p>
        </a>
        <a href="https://google.com" className="other-link">
          <p>
            <span className="thoughts-date-underline">aug 2019.</span>
            {/* style={{"font-weight: bold"}} */}
            <span className="article-text-underline">
              List other material that you have written about code
            </span>
          </p>
        </a>
      </div>
    </section>
  );
};

export default Thoughts;
