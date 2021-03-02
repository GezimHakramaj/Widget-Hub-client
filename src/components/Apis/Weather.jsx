import React, { Component } from "react";

import { getWeather } from "../../adapters/componentAdapters";

import "../../styles/components/Apis/Weather.css";

export default class Weather extends Component {
  state = {
    weather: {},
  };

  componentDidMount = async () => {
    let data = await getWeather();
    this.setState({
      weather: data.data,
    });
  };

  render() {
    const {
      name = "Loading",
      main: {
        temp = "Loading",
        feels_like = "Loading",
        humidity = "Loading",
      } = {},
      weather: [{ description = "Loading" }] = [{}],
    } = this.state.weather;
    return (
      <div className="weatherContainer">
        <h2>Today's Forecast</h2>
        <h6>
          City: <span>{name}</span>
        </h6>
        <h6>
          <span>{description}</span>
        </h6>
        <h6>
          Temperature: <span>{temp}</span>
        </h6>
        <h6>
          Feels Like: <span>{feels_like}</span>
        </h6>
        <h6>
          Humidity: <span>{humidity}</span>
        </h6>
        <br />
      </div>
    );
  }
}
