/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Fantasy Band",
    description:
      "This app is used to create your own band with the best rock n roll musicians in History. This was created in one week using a MERN stack and deployed on heroku.",
    url: "https://fantasy-band-mp.herokuapp.com/",
  },
  {
    title: "Help! , a food review app",
    description: "A group project with 2 other developers and myself created a food review app using a PERN stack and deployed on heroku",
    url: "https://help-front-end.herokuapp.com/",
  },
  {
    title: "The Coolest Theme Park Foods Ever!!",
    description:
      "This was a collorbation with three other developers using a PERN stack. The theme had to revolve around theme parks and had to be created in three days. This app included full CRUD , allowing users to add , update or delete food items from our main page. This was deployed on heroku. ",
    url: "https://tctpfe.herokuapp.com/",
  },
  {
    title: "Pirate Hangman Game",
    description:
      "A recreation of the classic game of hangman with a theme and wordbank centered around pirates. This application was created using nothing but HTML , CSS , and vanilla JavaScript.The game will has a wordbank that randomly renders a word when the pages loads or when an onclick event occurs when asking to playing again. The game has a alphabet display and you can select letters, the hidden word will conditionally render correct letters and have you lose lives if your letter is incorrect.",
    url: "https://piratehangman.surge.sh/gamepage.html",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
