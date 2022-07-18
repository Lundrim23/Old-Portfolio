import React from "react";
import PText from "../components/PText";
import CV from "../assets/data/CV-Lundrim Aliu.pdf";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfo from "../components/AboutInfo";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and(max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }

  .button1 {
    font-size: 2.2rem;
    background-color: var(--dark-bg);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .button1 {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Lundrim Aliu</span>
            </p>
            <h2 className="about__heading">A Front-end Developer</h2>
            <div className="about__info">
              <PText>
                I am from Vitia. A place of beauty and nature. Since my
                childhood, i love art and design. I always try to design stuff
                with my unique point of view. I also love to create things that
                can be usefull to others. <br /> <br />I started coding since I
                was in high school. Coding is also an art for me. I love it and
                now I have the opportunity to design along with the coding. I
                find it really interesting and I enjoyed the process a lot.{" "}
                <br /> <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <a href={CV} download="myCV">
              <button className="button1" type="submit">
                <b>Download CV</b>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Random Img"></img>
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfo
              title="School"
              items={[`Kuvendi i Lezhës.High School, Viti `]}
            />
            <AboutInfo
              title="College"
              items={[`Riinvest College, Prishtine `]}
            />
            <AboutInfo
              title="University Major"
              items={[`BSc Computer Science – Software Engineering `]}
            />
          </div>

          {/*  */}

          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfo
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "REACT"]}
            />
            <AboutInfo title="BackEnd" items={["c#"]} />
            <AboutInfo title="Design" items={[`Figma`]} />
          </div>
        </div>
      </div>
      <ContactBanner></ContactBanner>
    </AboutPageStyles>
  );
}
