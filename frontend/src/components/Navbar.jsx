import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚀 SpaceOps
      </div>

      <div className="nav-links">
        <Link to="/">APOD</Link>
        <Link to="/iss">ISS Tracker</Link>
        <Link to="/launches">Launches</Link>
        <Link to="/weather">Space Weather</Link>
        <Link to="/news">News</Link>
      </div>
    </nav>
  );
}

export default Navbar;