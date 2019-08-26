import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

import Button from "../presentational/Button";

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button buttonText="Login" buttonFunction={this.props.loginApp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#ffffff"
  }
});

LoginView.propTypes = {
  buttonFunction: PropTypes.func.isRequired
};

export default LoginView;
