import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      excerpt: this.props.excerpt || "",
    };
  }

  render() {
    return (
      <div id={`${this.props.id}`}>
        <textarea
          id="title"
          type="text"
          maxLength="35"
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
          value={this.state.title}
        ></textarea>
        <textarea
          id="excerpt"
          type="text"
          maxLength="1000"
          onChange={this.handleChange}
          name="excerpt"
          placeholder="Today I will...."
          value={this.state.excerpt}
        ></textarea>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}
