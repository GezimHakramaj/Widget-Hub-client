import { Component } from "react";
import { Redirect } from "react-router";

import { signup, login } from "../../adapters/userAdapters";
import { Input } from "../index";
import "../../styles/components/Form/Forms.css";

export default class SignupForm extends Component {
  state = {
    loggedIn: false,
  };

  render() {
    if (this.state.loggedIn) return <Redirect to="/" />;
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <Input item="First Name: " name="firstname" placeholder="Alex" />
          <Input item="Last Name: " name="lastname" placeholder="Doe" />
          <Input item="Email: " name="email" placeholder="alexdoe@email.com" />
          <Input item="Password: " name="password" placeholder="********" />
          <input type="submit" />
        </form>
      </div>
    );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target["firstname"].value,
      lastname: e.target["lastname"].value,
      email: e.target["email"].value,
      password: e.target["password"].value,
    };

    await signup(data)
      .then(async () => {
        const { email, password } = data;
        await login({ email, password })
          .then((user) => this.setState({ loggedIn: true }))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
}
