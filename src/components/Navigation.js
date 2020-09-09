import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation() {
  let tasks = localStorage.getItem("activeTasks");
  if (tasks) {
    tasks = tasks.split(",");
  } else {
    tasks = [];
  }
  return (
    <nav>
      <p>{tasks.length} Current Tasks</p>
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
