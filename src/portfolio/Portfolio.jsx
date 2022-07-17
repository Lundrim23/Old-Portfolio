import React from "react";
import styled from "styled-components";
import "../portfolio/portfolio.css";
import IMG1 from "../assets/images/img1-UnSplashed.PNG";
import IMG2 from "../assets/images/img2-MovieLand.PNG";
import IMG3 from "../assets/images/img3-Picture-In-Picture.PNG";
import IMG4 from "../assets/images/img4-QuoteGenerator.PNG";
import Button from "../components/Button";
import SectionTittle from "../components/SectionTittle";

const ButtonsStyles = styled.div`
  /* .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    /* margin-top: 2rem; */
  /* margin-bottom: 3rem;
  } */
  .portfolio__heading {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export default function Portfolio() {
  return (
    <ButtonsStyles>
      <section id="portfolio">
        <div className="portfolio__heading">
          <SectionTittle
            heading="PROJECTS"
            subheading="some of my recent works"
          ></SectionTittle>
        </div>

        {/*  */}
        {/*Github link: https://github.com/Lundrim23/InfiniteScroll-UnsplashAPI
          Live deme:https://62d40e3144bb7b5a68aad701--jolly-belekoy-b91829.netlify.app/  */}

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt=""></img>
            </div>
            <h3>InfiniteScroll</h3>
            <div className="aboutSection__buttons">
              <Button btnLink="/projects" btnText="Github"></Button>
              <Button btnLink="/About" btnText="Live Demo" outline></Button>
            </div>
          </article>

          {/*  */}
          {/*Github Link: https://github.com/Lundrim23/MovieLand 
          Live demo: Can't deploy 'api not working ???????????? */}

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt=""></img>
            </div>
            <h3>MovieLand</h3>
            <div className="aboutSection__buttons">
              <Button btnLink="/projects" btnText="Github"></Button>
              <Button btnLink="/About" btnText="Live Demo" outline></Button>
            </div>
          </article>

          {/*  */}
          {/*Github Link:https://github.com/Lundrim23/Picture-in-Picture 
          Live Demo: https://62d412bff459cd562e10d587--peppy-gelato-6d352c.netlify.app/  */}

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt=""></img>
            </div>
            <h3>Picture-in-Picture</h3>
            <div className="aboutSection__buttons">
              <Button btnLink="/projects" btnText="Github"></Button>
              <Button btnLink="/About" btnText="Live Demo" outline></Button>
            </div>
          </article>

          {/*Github Link: https://github.com/Lundrim23/Quote-generator
          Live Demo: https://62d413540eebee605b9d45e1--guileless-phoenix-dbabdd.netlify.app/  */}

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt=""></img>
            </div>
            <h3>Quote-generator</h3>
            <div className="aboutSection__buttons">
              <Button btnLink="/projects" btnText="Github"></Button>
              <Button btnLink="/About" btnText="Live Demo" outline></Button>
            </div>
          </article>
        </div>
      </section>
    </ButtonsStyles>
  );
}
