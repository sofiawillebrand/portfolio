import React from "react";

const Thoughts = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="heading-container">
          <h1 className="sections-heading">My thoughts </h1>
        </div>

        <div className="thoughts-container">
          <article className="thoughts-flex">
            <div className="image-container">
              <img
                className="image-thoughts"
                src="../assets/self-five.png"
                alt=""
              />
            </div>
            <div>
              <p className="thoughts-date">dec 2021</p>
              <p className="thoughts-header">
                Daring to share and feeling satisfied with what you
                have created
              </p>
              <p className="article-text">
                16 weeks has passed since I started my journey to
                become a frontend developer. That means that I have
                managed to create 16 projects, on my own and in pairs
                with my teammates. It has been challenging and
                superfun, but there are two parts in particular that I
                have struggled with.{" "}
              </p>
              <a
                href="https://medium.com/@sofiawillebrand/daring-to-share-and-feeling-satisfied-with-what-you-have-created-353f3834e9f1"
                className="thoughts-link"
                target="_blank"
                rel="noreferrer"
              >
                Read full text on Medium
              </a>
            </div>
          </article>
          <article className="thoughts-flex">
            <div className="image-container">
              <img
                className="image-thoughts-two"
                src="../assets/confused-monkey.jfif"
                alt="confused-monkey"
              />
            </div>
            <div>
              <p className="thoughts-date">nov 2021</p>
              <p className="thoughts-header">
                From biology to frontend development
              </p>
              <p className="article-text">
                Since I was young I have always believed that I was
                supposed to work in some way or another as a
                biologist. Both my parents and their spouses work in
                that field, and it felt like a natural path for me. I
                spent five years learning all about biology, ecology,
                statistics and fieldwork at the university. Then, I
                started working as an environmental consultant. I
                liked my job, but I had a feeling something was
                missing.{" "}
              </p>
              <a
                href="https://medium.com/@sofiawillebrand/from-biology-to-frontend-development-95c3f122ee9"
                className="thoughts-link"
                target="_blank"
                rel="noreferrer"
              >
                Read full text on Medium
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
