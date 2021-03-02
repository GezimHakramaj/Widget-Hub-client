import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      name: this.props.name,
      placeholder: this.props.placeholder,
    };
  }

  render() {
    return (
      <>
        <p>{this.state.item}</p>
        <input
          type={this.state.name}
          name={this.state.name}
          placeholder={this.state.placeholder}
          onChange={this.handleChange}
        />
      </>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}
