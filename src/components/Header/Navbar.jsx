import { Link } from "react-router-dom";

export function Navbar(props) {
  return (
    <div className="navBar">
      <ul>
        {props.user ? (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/edit">Edit Hub</Link>
            </li>
            <li>
              <Link to="/">Back</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
