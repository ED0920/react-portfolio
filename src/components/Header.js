import { Link, useLocation } from "react-router-dom";

const style = {
  color: "#E7ECEF",
};

const selectedStyle = {
  color: "#E7ECEF",
  fontWeight: 'bold'
}

const Header = () => {

  const currentPath = useLocation().pathname

  return (
    <div className="Nav">
      <div>
        <h1>Elisa</h1>
      </div>
      <div class="Navbar">
        <Link to={"/"} class="navStyle" style={currentPath === "/" ? selectedStyle : style}>
          About Me
        </Link>
        <Link to={"/portfolio"} style={currentPath === "/portfolio" ? selectedStyle : style}>
          Portfolio
        </Link>
        <Link to={"/contact"} style={currentPath === "/contact" ? selectedStyle : style}>
          Contact
        </Link>
        <Link to={"/resume"} style={currentPath === "/resume" ? selectedStyle : style}>
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
