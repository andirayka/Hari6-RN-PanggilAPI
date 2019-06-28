import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

export default class MenuHome extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onPress={this.props.onPress}
      >
        <Image source={this.props.image} style={styles.image} />
        <View style={styles.viewDark} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.label}</Text>
          <Text style={styles.postDate}>Posted by {this.props.postDate}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 230,
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 7
  },
  viewDark: {
    backgroundColor: "black",
    width: "100%",
    height: 230,
    position: "absolute",
    opacity: 0.3
  },
  image: {},
  textContainer: {
    top: 105,
    left: 20,
    position: "absolute"
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30
  },
  postDate: { color: "#FFFFFF", fontSize: 15 }
});
