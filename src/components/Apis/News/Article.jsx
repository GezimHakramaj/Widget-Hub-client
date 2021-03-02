import React, { Component } from "react";

import "../../../styles/components/Apis/News.css";

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsArticle">
        <a href={this.props.url}>
          <h6>{this.props.title}</h6>
        </a>
        <img src={this.props.image} />
        <p>{this.props.author}</p>
        <p>{this.props.description}</p>
        <p>{this.props.source}</p>
        <p>{this.props.published}</p>
        <p>{this.props.category}</p>
      </div>
    );
  }
}
