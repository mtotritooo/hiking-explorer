import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222" }}>
      <Link to="/" style={{ color: "#fff", marginRight: 10 }}>Home</Link>
      <Link to="/favorites" style={{ color: "#fff", marginRight: 10 }}>Favorites</Link>
      <Link to="/about" style={{ color: "#fff" }}>About</Link>
    </nav>
  );
};

export default Navbar;
