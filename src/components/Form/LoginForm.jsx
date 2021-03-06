import { Component } from "react";

import { Redirect } from "react-router-dom";

import { login } from "../../adapters/userAdapters";
import { Input } from "../index";
import "../../styles/components/Form/Forms.css";

export default class LoginForm extends Component {
  state = {
    loggedIn: false,
  };

  render() {
    if (this.state.loggedIn) return <Redirect to="/homepage" />;
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <Input item="Email: " name="email" placeholder="alexdoe@email.com" />
          <Input item="Password: " name="password" placeholder="********" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    await login(data)
      .then((user) => this.setState({ loggedIn: true }))
      .catch((err) => console.log(err));
  };
}
