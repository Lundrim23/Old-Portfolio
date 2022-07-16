import React from "react";
import styled from "styled-components";
import SectionTittle from "./SectionTittle";
import ServicesSectionsItems from "./ServicesSectionsItems";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTittle
          heading="Services"
          subheading="what i will do for you"
        ></SectionTittle>
        <div className="services__allItems">
          <ServicesSectionsItems
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionsItems
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop the websites. I create high performance website with blazing fast speed"
          />
          <ServicesSectionsItems
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
