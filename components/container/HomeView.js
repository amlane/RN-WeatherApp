import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

import Button from "../presentational/Button";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://www.metaweather.com/api/location/2487956")
      .then(res => {
        this.setState({
          ...this.state,
          currentWeather: res.data.consolidated_weather[0].weather_state_name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.homeTitle}>
            Welcome to your first{" "}
            <Text style={styles.redText}>React Native</Text> app!
          </Text>
        </View>
        <View>
          {this.state.currentWeather ? (
            <Text
              style={styles.weatherText}
            >{`Weather type: ${this.state.currentWeather}`}</Text>
          ) : null}
        </View>
        <Button buttonText="Logout" buttonFunction={this.props.logoutApp} />
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
