import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default class ListImageSmall extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.touchable}
        onPress={this.props.onPress}
      >
        <Image source={this.props.image} style={styles.image} />
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.postDate}>Posted by {this.props.postDate}</Text>
      </TouchableOpacity>
    );
  }
}

styles = StyleSheet.create({
  touchable: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden",
    width: "44%",
    margin: "3%"
  },
  image: {
    width: "100%",
    height: 100
  },
  title: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 17,
    fontWeight: "bold"
  },
  postDate: {
    alignSelf: "flex-start",
    color: "grey"
  }
});
