import React, { Component } from "react";

import HomeView from "./components/container/HomeView";
import LoginView from "./components/container/LoginView";
import authenticate from "./components/container/authenticate";

class App extends Component {
  render() {
    return <HomeView logoutApp={this.props.logoutApp} />;
  }
}

export default authenticate(App)(LoginView);
