import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Homepage, LandingPage, Login, Signup } from "./pages/index";
import { Header, PrefsForm, Logout } from "./components/index";
import { me } from "./adapters/userAdapters";

import "./styles/App.css";

export default class App extends Component {
  state = { user: null };

  componentDidMount = async () => {
    await me().then((user) => {
      this.setState({ user: user.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Route>
          <Header user={this.state.user} />
        </Route>
        <Switch>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route
            exact
            path="/"
            component={this.state.user ? Homepage : LandingPage}
          ></Route>
          <Route exact path="/edit" component={PrefsForm}></Route>
        </Switch>
      </div>
    );
  }
}
