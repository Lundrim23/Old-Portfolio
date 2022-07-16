import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStylees = styled.div`
  text-align: center;
  .servicesitem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionsItems({
  icon = <MdDesktopMac />,
  title = "web design",
  desc = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStylees>
      <div className="servicesitem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStylees>
  );
}
