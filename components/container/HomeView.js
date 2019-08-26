import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

class HomeView extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.homeTitle}>
            Welcome to your first{" "}
            <Text style={styles.redText}>React Native</Text> app!
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignSelf: "stretch",
    paddingRight: 40,
    paddingLeft: 40
  },
  headerContent: {
    alignSelf: "stretch",
    justifyContent: "center",
    height: 200,
    marginTop: 100,
    marginBottom: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  homeTitle: {
    textAlign: "center",
    fontSize: 28
  },
  redText: {
    color: "red"
  }
});

export default HomeView;
