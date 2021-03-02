import React, { Component } from "react";

import { getCovid } from "../../adapters/componentAdapters";

import "../../styles/components/Apis/Covid.css";

export default class Covid extends Component {
  state = {
    covid: {},
  };

  componentDidMount = async () => {
    let data = await getCovid();
    this.setState({
      covid: data.data,
    });
  };
  render() {
    const { dailyNegative, dailyPositive, dailyTests } = this.state.covid;
    return (
      <div className="covidContainer">
        <h2>Covid Numbers</h2>
        <h6>
          Daily Positive:<span>{dailyPositive}</span>
        </h6>
        <h6>
          Daily Negative:<span>{dailyNegative}</span>
        </h6>
        <h6>
          Daily Tests:<span>{dailyTests}</span>
        </h6>
        <br />
      </div>
    );
  }
}
