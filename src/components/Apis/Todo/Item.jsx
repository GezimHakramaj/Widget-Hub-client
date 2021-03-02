import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      excerpt: "",
    };
  }

  render() {
    return (
      <div className="todoItem">
        <div className="itemTitle">
          <textarea
            type="text"
            maxLength="50"
            onChange={this.handleChange}
            name="title"
            placeholder={"Title"}
            value={this.state.title}
          ></textarea>
        </div>
        <div className="itemExcerpt">
          <textarea
            type="text"
            maxLength="300"
            onChange={this.handleChange}
            name="excerpt"
            placeholder="Today I will...."
            value={this.state.excerpt}
          ></textarea>
        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}
