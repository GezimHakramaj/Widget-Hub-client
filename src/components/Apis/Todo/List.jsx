import React, { useContext } from "react";

import { Item } from "../../index";
import { UserContext } from "../../../context/User";

import "../../../styles/components/Apis/Todo.css";

export const List = () => {
  const { tasks } = useContext(UserContext);
  return (
    <div className="todoList">
      <nav>{populateNav(tasks)}</nav>
      <div className="items">{displayList(tasks)}</div>
    </div>
  );
};

function handleClick(e) {
  window.location.href = e.target.name;
  console.log(e.target.name);
}

function populateNav(tasks) {
  if (tasks === undefined) return;
  else {
    let navList = [];
    tasks.map((task, index) => {
      navList.push(
        <>
          <label className="radio">
            <input
              type="radio"
              id={`#item${index}`}
              name={`#item${index}`}
              onClick={handleClick}
            />
          </label>
        </>
      );
    });
    return navList;
  }
}

function displayList(tasks) {
  if (tasks === undefined) return;
  else {
    let taskList = [];
    tasks.map((task, index) => {
      taskList.push(
        <Item id={`item${index}`} title={task.title} excerpt={task.excerpt} />
      );
    });
    return taskList;
  }
}
