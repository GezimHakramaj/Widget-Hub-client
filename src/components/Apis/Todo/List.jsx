import React, { Component } from "react";

import { Item } from "../../index";

import "../../../styles/components/Apis/Todo.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <div className="todoListContainer">
        <div className="todoListHeader">
          <h3>Todo List</h3>
          <button onClick={this.addItems}>+</button>
        </div>
        <div className="todoList">{this.displayTodoList()}</div>
      </div>
    );
  }

  displayTodoList() {
    if (this.state.list.length !== 0) return this.state.list;
    else return <p>:( you dont have any todo list items.</p>;
  }

  addItems = () => {
    let newList = this.state.list;
    newList.push(<Item />);
    this.setState({
      list: newList,
    });
  };
}
