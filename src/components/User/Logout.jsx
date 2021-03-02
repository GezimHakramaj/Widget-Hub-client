import { Component } from "react";
import { Redirect } from "react-router";

import { logout } from "../../adapters/userAdapters";

export default class Logout extends Component {
  state = {
    loggedIn: true,
  };

  componentDidMount = async () => {
    await logout()
      .then((res) => {
        this.setState({ loggedIn: false });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    if (!this.state.loggedIn) return <Redirect to="/login" />;
    return <> </>;
  }
}
