import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTittle from "./SectionTittle";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding-top: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    margin-top: 2rem;
  }
  @media only screen and(max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTittle
            subheading="Let me introduce myself"
            heading="About me"
          ></SectionTittle>
          <PText>
            I am student learning website design and developer from
            Kosova,Vitia. I try to create professional websites. I love art and
            always try to show unique views to the audience through my design
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works"></Button>
            <Button btnLink="/About" btnText="Read More" outline></Button>
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt=""></img>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
