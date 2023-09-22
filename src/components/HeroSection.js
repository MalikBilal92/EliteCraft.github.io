import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Welcome to Elite Craft Ind - Crafting Excellence in Apparel At
              Elite Craft Ind, we take pride in being a leading manufacturer in
              the apparel industry, specializing in Leather Jackets, Sports
              Wears, and Work Wears. Our journey began with a singular vision:
              to create garments that don't just meet, but exceed, our
              customers' expectations. We invite you to explore our diverse
              range of products and discover why Elite Craft Ind is synonymous
              with quality and reliability. Thank you for choosing us; we look
              forward to serving you.
            </p>
            <h2> Why Choose Us? </h2>
            <p>
              <h3> Customization: </h3>We understand that everyone's needs are unique,
              which is why we offer custom-tailored solutions to meet your
              specific requirements.
            </p>
            <p>
              <h3>Competitive Pricing:</h3> Quality doesn't have to come at a steep
              price. We offer competitive pricing without compromising on the
              quality of our products.
            </p>
            <p>
              <h3>Customer Satisfaction:</h3> Our customers are at the heart of
              everything we do. We strive to exceed your expectations, every
              step of the way.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/google.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
