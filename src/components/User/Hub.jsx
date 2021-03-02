import React, { Component } from "react";
import { Clock, Covid, News, Weather, List } from "../../components/index";

import { me } from "../../adapters/userAdapters";
import axios from "axios";

export default class Hub extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    await me().then((user) => {
      this.setState({ user: user.data });
      console.log(user.data);
    });
    console.log(this.state.user);
  };

  render() {
    return <div className="hub">{this.getUserPrefs()}</div>;
  }

  getUserPrefs() {
    let widgets = [];
    const {
      pref: {
        clock = true,
        toDoList = true,
        covid = false,
        weather = false,
        news = false,
      } = {},
    } = this.state.user || {};

    if (weather) widgets.push(<Weather />);
    if (news) widgets.push(<News />);
    if (covid) widgets.push(<Covid />);
    if (clock) widgets.push(<Clock />);
    if (toDoList) widgets.push(<List />);

    return widgets;
  }
}
