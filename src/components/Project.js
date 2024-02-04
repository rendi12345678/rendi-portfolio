import React from "react";
import "../styles/project.css";
import "../styles/reset.css";

const Project = () => {
  const movePage = (url) => {
    window.location.href = url;
  };

  const showProject = ({ imageUrl, title, demoLink, description }) => {
    return (
      <>
        <figure className="project">
          <img src={imageUrl} alt="Project" title="Project" />
          <div>
            <h3>{title}</h3>
            <p>Demo : <a href={demoLink}>{demoLink}</a></p>
            <figcaption>{description}</figcaption>
          </div>
        </figure>
      </>
    );
  };

  // My projects
  const typingTestGame = {
    imageUrl: "/img/eletype1.png",
    title: "Open Source Typing Test Game",
    demoLink: "https://eletype-ac448.web.app",
    description:
      "This is my project from open-source that allows users to log in / sign up, practice typing, and also includes a leaderboard feature that enables users to see their rankings. Built with the MERN stack.",
  };

  const onlineBookStore = {
    imageUrl: "/img/book-store.png",
    title: "Online Book Store",
    demoLink: "https://ilham-store.web.app",
    description:
      "This is my personal project for a book store that enables users to browse all available books, manage their shopping cart, and seamlessly purchase books via WhatsApp. Built with the MERN stack.",
  };

  const nannyLandingPage = {
    imageUrl: "/img/nanny-landing-page.png",
    title: "Nanny's Landing Page",
    demoLink: "https://ningsih-nanny.web.app",
    description:
      "This is my personal project, a nanny services landing page built with React.js. The platform offers a user-friendly interface for families to discover and connect with experienced nanny, showcasing essential information such as profiles and contact details.",
  };

  const websitePilpres = {
    imageUrl: "/img/web-capres.png",
    title: "Fun Pilpres Site",
    demoLink: "https://fun-pilpres.web.app",
    description:
      "This is my personal project, built with the MERN stack, to allow users to choose presidential candidates based on specific reasons, with user authentication using JWT, and to view the total votes solely for entertainment purposes.",
  };

  return (
    <section className="project-section" id="project-section">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My projects</p>
      </div>
      <div className="project-list">
        {showProject(typingTestGame)}
        {showProject(onlineBookStore)}
        {showProject(nannyLandingPage)}
        {showProject(websitePilpres)}
      </div>
    </section>
  );
};

export default Project;
