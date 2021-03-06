import React, { useContext } from "react";
import { Clock, Covid, News, Weather, List } from "../../components/index";

import { UserContext } from "../../context/User";
import "../../styles/components/User/Hub.css";

export const Hub = () => {
  const user = useContext(UserContext);
  return (
    <div className="hub">
      {getUserPrefs(user).map((widget) => {
        return <div className="widget">{widget}</div>;
      })}
    </div>
  );
};

function getUserPrefs(user) {
  let widgets = [];
  const {
    pref: {
      clock = true,
      toDoList = true,
      covid = false,
      weather = false,
      news = false,
    } = {},
  } = user;

  if (weather) widgets.push(<Weather />);
  if (news) widgets.push(<News />);
  if (covid) widgets.push(<Covid />);
  if (clock) widgets.push(<Clock />);
  if (toDoList) widgets.push(<List />);

  return widgets;
}
