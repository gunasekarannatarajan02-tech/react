import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/primitive">Primitive</Link> |{" "}
      <Link to="/non-primitive">Non-Primitive</Link>
    </nav>
  );
}

export default Navbar;
