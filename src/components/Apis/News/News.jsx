import React, { Component } from "react";
import { Article } from "../../index";
import { getNews } from "../../../adapters/componentAdapters";

export default class News extends Component {
  state = {
    news: [],
  };

  componentDidMount = async () => {
    let data = await getNews();
    this.setState({
      news: data.data.data,
    });
  };

  render() {
    return (
      <div className="newsContainer">
        {this.state.news.map((article, index) => {
          return (
            <Article
              title={article.title}
              description={article.description}
              author={article.author}
              image={article.image}
              category={article.category}
              url={article.url}
              source={article.source}
              published={article.published_at}
            />
          );
        })}
      </div>
    );
  }
}
