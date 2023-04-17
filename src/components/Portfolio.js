import bg1 from "../assets/pro1.webp";
import bg2 from "../assets/pro2.jpeg";
import bg3 from "../assets/pro3.avif";
import bg4 from "../assets/pro4.jpeg";
import bg5 from "../assets/pro5.jpeg";
import bg6 from "../assets/pro6.jpeg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";
import { useState } from "react";

const marginStyling = { marginLeft: 10, marginRight: 10 };

const PortfolioBox = ({ image, children }) => {
  const [hover, setHover] = useState(false);

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    opacity: hover ? 0.5 : 1,
    zIndex: -9999,
  };
  const textStyle = {
    opacity: hover ? 1 : 0,
    PaddingTop: "10px",
  };
  return (
    <div
      class="image-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={textStyle}>{children}</div>
      <div class="image" style={imageStyle}></div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div class="Portfolio">
      <div class="bodyContainer">
        <h2>Portfolio</h2>
        <div class="container">
          <PortfolioBox image={bg1}>
            <>
              <div style={marginStyling}>
                <a href="https://note-taker-23.herokuapp.com/"> Note Taker</a>
                <a
                  href="https://github.com/ED0920/note-taker"
                  style={{ margin: "10px 10px 10px 10px" }}
                >
                  <GithubSvg />
                </a>
                <h5>JavaScript</h5>
              </div>
            </>
          </PortfolioBox>
          <PortfolioBox image={bg2}>
            <>
              <a href="https://ed0920.github.io/password-generator/">
                Password Generator
              </a>
              <a
                href="https://github.com/ED0920/note-taker"
                style={{ margin: "10px 10px 10px 10px" }}
              >
                <GithubSvg />
              </a>
              <h5>MernStack</h5>
            </>
          </PortfolioBox>
          <PortfolioBox image={bg3}>
            <>
              <a href="https://ed0920.github.io/Code-Quiz/">Coding Quiz </a>
              <a
                href="https://github.com/ED0920/Code-Quiz"
                style={{ margin: "10px 10px 10px 10px" }}
              >
                <GithubSvg />
              </a>
              <h5>Web APIs</h5>
            </>
          </PortfolioBox>

          <PortfolioBox image={bg4}>
            <>
              <a href="https://project-2-fullstack-estore.herokuapp.com/">
                Ecommerce Store
              </a>
              <a
                href="https://github.com/ED0920"
                style={{ margin: "10px 10px 10px 10px" }}
              >
                <GithubSvg />
              </a>
              <h5>Project 2</h5>
            </>
          </PortfolioBox>

          <PortfolioBox image={bg5}>
            <>
              <a href="https://ed0920.github.io/Professional-Porfolio/">
                Professional Portfolio
              </a>
              <a
                href="https://github.com/ED0920/Professional-Porfolio"
                style={{ margin: "10px 10px 10px 10px" }}
              >
                <GithubSvg />
              </a>
              <h5>HTML & CSS</h5>
            </>
          </PortfolioBox>

          <PortfolioBox image={bg6}>
            <>
              <a href="https://ed0920.github.io/Weather-Dashboard/">
                Weather Dashboard
              </a>
              <a
                href="https://github.com/ED0920/Weather-Dashboard/"
                style={{ margin: "10px 10px 10px 10px" }}
              >
                <GithubSvg />
              </a>
              <h5>HTML & CSS</h5>
            </>
          </PortfolioBox>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
