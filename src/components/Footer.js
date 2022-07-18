import React from "react";
import PText from "./PText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      {" "}
      <div className="container">
        <div className="footer_col1">
          <h1 className="footet__col1_title"> Lundrim Aliu</h1>
          <PText>
            A student learning web design and development from Kosova, Vitia. I
            always make websites that have unique designs and alse has a good
            performance rate 👍.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/About",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/Projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/Contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+383 49 787 925",
                path: "tel:+383 49 787 925",
              },
              {
                title: "aliulundrim22@gmail.com ",
                path: "mailto:aliulundrim23@gmail.com",
              },
              {
                title: `Kosovo, Vitina, 
                 Adem Jashari `,
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook ",
                path: "https://www.facebook.com/profile.php?id=100017929297781",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/lundrim-aliu-6101071b5/",
              },
              {
                title: "Github",
                path: "https://github.com/Lundrim23",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Portfolio | Designed by Lundrim Aliu 😎</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
