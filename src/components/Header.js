import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Nav">
      <div>
        <h1>Elisa</h1>
      </div>
      <div class="Navbar">
        <Link to={"/"}>About Me</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/resume"}>Resume</Link>
      </div>
    </div>
  );
};

export default Header;
