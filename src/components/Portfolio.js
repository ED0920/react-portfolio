import bg1 from "../assets/pro1.webp";
import bg2 from "../assets/pro2.jpeg";
import bg3 from "../assets/pro3.avif";
import bg4 from "../assets/pro4.jpeg";
import bg5 from "../assets/pro5.jpeg";
import bg6 from "../assets/pro6.jpeg";
import { ReactComponent as GithubSvg } from "../assets/github.svg";

const boxStyle1 = {
  backgroundImage: `url(${bg1})`,
  backgroundSize: "cover",
};
const boxStyle2 = {
  backgroundImage: `url(${bg2})`,
  backgroundSize: "cover",
};

const boxStyle3 = {
  backgroundImage: `url(${bg3})`,
  backgroundSize: "cover",
};
const boxStyle4 = {
  backgroundImage: `url(${bg4})`,
  backgroundSize: "cover",
};
const boxStyle5 = {
  backgroundImage: `url(${bg5})`,
  backgroundSize: "cover",
};
const boxStyle6 = {
  backgroundImage: `url(${bg6})`,
  backgroundSize: "cover",
};
const Portfolio = () => {
  return (
    <div class="Portfolio">
      <div class="bodyContainer">
        <h2>Portfolio</h2>
        <div class="container">
          <div class="image-container" style={boxStyle1}>
            <a href="https://note-taker-23.herokuapp.com/"> Note Taker</a>
            <a
              href="https://github.com/ED0920/note-taker"
              style={{ margin: "10px 10px 10px 10px" }}
            >
              <GithubSvg />
            </a>
            <h5>JavaScript</h5>
          </div>

          <div class="image-container" style={boxStyle2}>
            <a href="https://ed0920.github.io/password-generator/">
              {" "}
              Password Generator
            </a>
            <a
              href="https://github.com/ED0920/note-taker"
              style={{ margin: "10px 10px 10px 10px" }}
            >
              <GithubSvg />
            </a>
            <h5>MernStack</h5>
          </div>

          <div class="image-container" style={boxStyle3}>
            <a href="https://ed0920.github.io/Code-Quiz/">Coding Quiz </a>
            <a
              href="https://github.com/ED0920/Code-Quiz"
              style={{ margin: "10px 10px 10px 10px" }}
            >
              <GithubSvg />
            </a>
            <h5>Web APIs</h5>
          </div>

          <div class="image-container" style={boxStyle4}>
            <a href="https://project-2-fullstack-estore.herokuapp.com/">
              Ecommerce Store
            </a>
            <a
              href="https://github.com/ED0920"
              style={{ margin: "10px 10px 10px 10px" }}
            >
              <GithubSvg />
            </a>
            <h5>project 2</h5>
          </div>

          <div class="image-container" style={boxStyle5}>
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
          </div>

          <div class="image-container" style={boxStyle6}>
            <a href="https://ed0920.github.io/Weather-Dashboard/">
              Weather Dashboard
            </a>
            <a
              href=" https://github.com/ED0920/Weather-Dashboard"
              style={{ margin: "10px 10px 10px 10px" }}
            >
              <GithubSvg />
            </a>
            <h5>Server-Side APIs</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
