import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { UserContext } from "./context/User";
import { Homepage, LandingPage, Login, Signup } from "./pages/index";
import { Header, PrefsForm, Logout } from "./components/index";
import { me } from "./adapters/userAdapters";

import "./styles/App.css";

export default class App extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    const user = await me().catch((err) => console.log(err));
    this.setState({ user: user.data });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <div className="App">
          <Route>
            <Header />
          </Route>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/logout" component={Logout}></Route>
            <Route exact path="/homepage" component={Homepage}></Route>
            <Route exact path="/edit" component={PrefsForm}></Route>
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}
