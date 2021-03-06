import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { me, updatePrefs } from "../../adapters/userAdapters";

import "../../styles/components/Form/Forms.css";

export default class PrefsForm extends Component {
  state = {};

  componentDidMount = async () => {
    await me().then((user) => {
      let prefs = Object.keys(user.data.pref);
      prefs = prefs.slice(1, prefs.length - 3);
      prefs.map((api) => {
        this.setState({
          [`${api}`]: user.data.pref[`${api}`],
        });
      });
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/homepage" />;
    return (
      <>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            {this.populateForm()}
            <input type="submit" value="Submit" />
            <li>
              <Link to="/homepage">Back</Link>
            </li>
          </form>
        </div>
      </>
    );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await updatePrefs(this.state)
      .then((data) => {
        console.log(data);
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => console.error(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  populateForm = () => {
    let apis = [];
    for (const prop in this.state) {
      if (prop === "updated") continue;
      apis.push(
        <>
          <label htmlFor={prop}>
            {prop.slice(0, 1).toUpperCase() + prop.slice(1)}
            <input
              type="checkbox"
              name={prop}
              checked={this.state[prop]}
              onChange={this.handleChange}
            />
          </label>
        </>
      );
    }
    return apis;
  };
}
