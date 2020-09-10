import React from "react";
import "../styles/home.css";
import Navigation from "./Navigation.js";

function NoTask() {
  let tasks = localStorage.getItem("activeTasks");
  if (!tasks || !tasks.length) {
    return <p class="no-tasks">There are no tasks</p>;
  }
  return "";
}

class Home extends React.Component {
  state = {
    activeTasks: [],
    completedTasks: [],
    currentTask: "",
  };

  handleCompleteClick = (taskC) => {
    let tasks = localStorage.getItem("activeTasks").split(",");
    tasks = tasks.filter((task) => task !== taskC);
    let completed = localStorage.getItem("completedTasks");
    if (!completed.length) {
      completed = [];
    } else {
      completed = completed.split(",");
    }
    completed.push(taskC);
    this.setState({ activeTasks: tasks, completedTasks: completed });
    localStorage.setItem("activeTasks", tasks);
    localStorage.setItem("completedTasks", completed);
  };

  handleDeleteClick = (taskR) => {
    let tasks = localStorage.getItem("activeTasks").split(",");
    let index = tasks.indexOf(taskR);
    if (index !== -1) {
      tasks = tasks.filter((task) => task !== taskR);
      this.setState({ activeTasks: tasks });
      localStorage.setItem("activeTasks", tasks);
    }
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
    // if task is empty
    if (inputTask === "") {
      return;
    }
    // if task exists
    if (this.checkTaskExists(inputTask)) {
      alert(`Task "${inputTask}" already exists`);
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
    this.setState({ currentTask: e.target.value });
  };

  componentDidMount() {
    let tasks = localStorage.getItem("activeTasks");
    if (tasks) {
      tasks = tasks.split(",");
    } else {
      tasks = [];
    }
    let completed = localStorage.getItem("completedTasks");
    if (completed) {
      completed = completed.split(",");
    } else {
      completed = [];
    }
    this.setState({
      activeTasks: tasks,
      completedTasks: completed,
    });
    localStorage.setItem("activeTasks", tasks);
    localStorage.setItem("completedTasks", completed);
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
            className="inputNewTask"
          ></input>
          <input type="submit" value="Add Task" className="submitNewTask" />
        </form>
        <NoTask />
        <ul id="taskList">
          {this.state.activeTasks.map((task, i) => (
            <div key={i}>
              <svg
                id="task-checkbox"
                onClick={(e) => {
                  this.handleCompleteClick(task);
                }}
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                className="bi bi-check2-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"
                />
              </svg>
              <li key={i}>{task}</li>
              <svg
                id="task-trash"
                onClick={(e) => {
                  this.handleDeleteClick(task);
                }}
                width="1.2em"
                height="1.2em"
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
