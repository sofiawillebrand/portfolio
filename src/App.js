import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import Skills from "./components/Skills";
import More from "./components/More";
import Footer from "./components/Footer";

import featuredProjects from "./github-projects.json";

const App = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Tech />
      <Projects featuredProjects={featuredProjects} />
      <Thoughts />
      <Skills />
      <More />
      <Footer />
    </main>
  );
};

export default App;
