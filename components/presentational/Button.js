import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = ({ buttonText, buttonFunction }) => {
  return (
    <TouchableHighlight
      style={styles.btn}
      underlayColor={"#0E30F050"}
      onPress={buttonFunction}
    >
      <Text style={styles.btnText}>{buttonText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    justifyContent: "center",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 20,
    marginTop: 10
  },
  btnText: {
    color: "#ffffff",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 28
  }
});

export default Button;
