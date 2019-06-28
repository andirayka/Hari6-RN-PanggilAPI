import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Axios from "axios";
import { WebView } from "react-native-webview";
// import Shimmer from "../components/Shimmer";

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        "http://doc.greatworks.id/api/latihan/news/detail/" +
          this.props.navigation.state.params.NewsID
      );
      this.setState({ detail: response.data.data });
    } catch (error) {
      console.error("Error Bos!");
    }
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="grey" barStyle="light-content" />

        {this.state.detail.title && (
          <View>
            {/* <Shimmer autoRun={true} visible={false}> */}
            <Image
              source={{ uri: this.state.detail.image }}
              style={styles.banner}
            />
            {/* </Shimmer> */}

            <View style={styles.viewDark} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{this.state.detail.title}</Text>
              <Text style={styles.postDate}>{this.state.detail.post_date}</Text>
            </View>

            <TouchableOpacity
              style={styles.arrowBackContainer}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={require("../img/left-arrow.png")}
                style={styles.arrowBack}
              />
            </TouchableOpacity>

            <WebView
              style={{
                width: "100%",
                height: Dimensions.get("window").height
                // padding: 10
              }}
              scalesPageToFit={false}
              source={{
                html: this.state.detail.content
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

ArticleDetail.navigationOptions = () => ({
  header: null
});

const styles = StyleSheet.create({
  arrowBackContainer: {
    backgroundColor: "white",
    position: "absolute",
    width: 45,
    height: 45,
    top: 8,
    left: 8,
    borderRadius: 50
  },
  arrowBack: {
    width: 45,
    height: 45
  },
  banner: {
    width: "100%",
    height: 230
  },
  viewDark: {
    backgroundColor: "black",
    width: "100%",
    height: 230,
    position: "absolute",
    opacity: 0.3
  },
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
