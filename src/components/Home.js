import React from "react";
import "../styles/home.css";
import Navigation from "./Navigation.js";

class Home extends React.Component {
  state = {
    activeTasks: [],
    completedTasks: [],
    currentTask: "",
  };

  checkTaskExists = (task) => {
    let tasks = localStorage.getItem("activeTasks");
    if (tasks) {
      tasks = tasks.split(",");
    } else {
      tasks = [];
    }
    return tasks.includes(task);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let inputTask = this.state.currentTask;
    // if task exists
    if (this.checkTaskExists(inputTask)) {
      alert("h");
    }
    // new task
    else {
      let newActiveTasks = this.state.activeTasks;
      newActiveTasks.push(this.state.currentTask);
      this.setState({ activeTasks: newActiveTasks });
      localStorage.setItem("activeTasks", newActiveTasks);
    }
    this.setState({ currentTask: "" });
  };

  handleTaskChange = (e) => {
    this.setState({ currentTask: e.target.value.trim() });
  };

  componentDidMount() {
    let tasks = localStorage.getItem("activeTasks");
    if (tasks) {
      tasks = tasks.split(",");
    } else {
      tasks = [];
    }
    this.setState({
      activeTasks: tasks,
    });
  }

  render() {
    return (
      <>
        <Navigation />

        <form className="addNewTask" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleTaskChange}
            value={this.state.currentTask}
            placeholder="Add New Task"
          ></input>
          <input type="submit" value="Add Task" />
        </form>
        <ul id="taskList">
          {this.state.activeTasks.map((task, i) => (
            <div key={i}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
              </svg>
              <li key={i}>{task}</li>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
