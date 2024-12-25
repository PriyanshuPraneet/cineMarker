import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../assets/rounded.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="CineMarker Logo" className="navbar-logo" />{" "}
          CineMarker{" "}
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/fav" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
