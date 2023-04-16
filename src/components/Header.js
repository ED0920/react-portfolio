import { Link } from "react-router-dom";

const style = {
  color: "#E7ECEF",
};
const Header = () => {
  return (
    <div className="Nav">
      <div>
        <h1>Elisa</h1>
      </div>
      <div class="Navbar">
        <Link to={"/"} class="navStyle" style={style}>
          About Me
        </Link>
        <Link to={"/portfolio"} style={style}>
          Portfolio
        </Link>
        <Link to={"/contact"} style={style}>
          Contact
        </Link>
        <Link to={"/resume"} style={style}>
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
