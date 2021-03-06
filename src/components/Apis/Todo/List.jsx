import React, { useContext } from "react";

import { Item } from "../../index";
import { UserContext } from "../../../context/User";
import { updateTasks } from "../../../adapters/userAdapters";

import "../../../styles/components/Apis/Todo.css";

export const List = () => {
  const { tasks } = useContext(UserContext);
  return (
    <>
      <div className="todoList">
        <nav className="nav" id="nav">
          {populateNav(tasks)}
        </nav>
        <div className="items" id="items">
          {populateList(tasks)}
        </div>
      </div>
      <button className="todoButton" onClick={() => submitTasks()}>
        Save
      </button>
    </>
  );
};

function handleClick(e) {
  window.location.href = e.target.name;
}

function populateNav(tasks) {
  if (tasks === undefined) return;
  else {
    let navList = [];
    tasks.map((task) => {
      navList.push(
        <>
          <label className="radio">
            <input
              type="radio"
              id={`#item${task.id}`}
              name={`#item${task.id}`}
              onClick={handleClick}
            />
          </label>
        </>
      );
    });
    return navList;
  }
}

function populateList(tasks) {
  if (tasks === undefined) return;
  else {
    let taskList = [];
    tasks.map((task) => {
      taskList.push(
        <Item id={`item${task.id}`} title={task.title} excerpt={task.excerpt} />
      );
    });
    return taskList;
  }
}

async function submitTasks() {
  let tasks = document.getElementsByClassName("item");
  const data = [];
  for (let i = 0; i < tasks.length; i++) {
    data.push({
      id: tasks[i].id.charAt(4),
      title: tasks[i].children[0].value,
      excerpt: tasks[i].children[1].value,
    });
  }
  const response = await updateTasks(data).catch((err) => console.log(err));
  console.log(response);
}
