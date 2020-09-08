import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation() {
  return (
    <nav>
      <p>4 Current Tasks</p>
      <Link to="/" id="incomplete">
        Incomplete
      </Link>
      <Link to="/completed" id="complete">
        Completed
      </Link>
    </nav>
  );
}

export default Navigation;
