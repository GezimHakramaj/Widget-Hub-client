import React, { useContext } from "react";

import { UserContext } from "../../context/User";
import { Link } from "react-router-dom";

export function Navbar(props) {
  const user = useContext(UserContext);
  return (
    <div className="navBar">
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/edit">Edit Hub</Link>
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
