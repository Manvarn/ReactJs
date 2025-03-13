import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="mainDiv">
      <div className="listDiv">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/movie" style={{ textDecoration: "none" }}>
            Movie
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
      </div>
    </div>
  );
};
