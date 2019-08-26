import React, { Component } from "react";

const authenticate = App => LoginView => {
  return class extends Component {
    state = {
      loggedIn: false
    };

    loginLogoutApp = () => {
      this.setState(prevState => ({
        ...this.state,
        loggedIn: !prevState.loggedIn
      }));
    };

    render() {
      return (
        <>
          {this.state.loggedIn ? (
            <App logoutApp={this.loginLogoutApp} />
          ) : (
            <LoginView loginApp={this.loginLogoutApp} />
          )}
        </>
      );
    }
  };
};

export default authenticate;
