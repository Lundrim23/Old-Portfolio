import React from "react";
import SectionTittle from "./SectionTittle";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PText from "./PText";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const TestimonialsSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montoserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;

      cursor: pointer;
    }
  }
`;

export default function TestimonialSection() {
  return (
    <TestimonialsSectionStyles>
      <div className="container">
        <SectionTittle
          heading="Testimonials"
          subheading="see what out clients say about us"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit
                  </PText>
                </div>
                <h2 className="testimonial__name">Filan Fisteku</h2>
                <p className="testimonial__title">CEO, Netflix</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev">
            <MdArrowBack></MdArrowBack>
          </div>
          <div className="prev">
            <MdArrowForward></MdArrowForward>
          </div>
        </div>
      </div>
    </TestimonialsSectionStyles>
  );
}
