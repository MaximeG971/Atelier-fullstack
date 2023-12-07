import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/post">
          <li>Post</li>
        </Link>
        <Link to="/put">
          <li>Put</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
