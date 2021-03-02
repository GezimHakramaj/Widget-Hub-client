import React, { Component } from "react";

import "../../styles/components/Header/Icon.css";

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="iconContainer">
        <div className="iconImg"></div>
      </div>
    );
  }
}
