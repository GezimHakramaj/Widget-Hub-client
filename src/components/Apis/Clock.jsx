import React, { Component } from "react";

import "../../styles/components/Apis/Clock.css";

export default class Clock extends Component {
  componentDidMount = async () => {
    this.updateTime();
  };

  render() {
    return (
      <div className="clock">
        <div className="minuteHand" id="min"></div>
        <div className="hourHand" id="hr"></div>
        <div className="secondHand" id="sec"></div>
      </div>
    );
  }

  async updateTime() {
    while (true) {
      try {
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        document.getElementById("hr").style.transform = `rotateZ(${
          hr * 30
        }deg)`;
        document.getElementById("min").style.transform = `rotateZ(${
          min * 6
        }deg)`;
        document.getElementById("sec").style.transform = `rotateZ(${
          sec * 6 + 180
        }deg)`;

        await new Promise((resolve) => setTimeout(resolve, 10));
      } catch (err) {
        return;
      }
    }
  }
}
