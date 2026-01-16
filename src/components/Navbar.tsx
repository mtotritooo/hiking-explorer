import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./navbar.scss";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Hiking Explorer</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/favorites" className={`nav-link ${isActive("/favorites") ? "active" : ""}`}>
          Favorites
        </Link>
        <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
          About
        </Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
}

export default Navbar;
