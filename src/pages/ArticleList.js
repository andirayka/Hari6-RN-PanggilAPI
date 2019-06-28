import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image
} from "react-native";
import ListImageBanner from "../components/ListImageBanner";
import ListImageSmall from "../components/ListImageSmall";
import Axios from "axios";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        "http://doc.greatworks.id/api/latihan/news/list"
      );
      this.setState({ news: response.data.data });
    } catch (error) {
      console.error("Error Bos!");
    }
  }

  render() {
    return (
      <ScrollView style={styles.page}>
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <Text style={styles.title}>Your Everyday{"\n"}Inspiration</Text>
        <ListImageBanner
          image={require("../img/besar.png")}
          label="People doesn't know about us"
          postDate="27 June 2019"
          onPress={() => alert("Banner masih statis")}
        />

        {this.state.news.length > 0 && (
          <View style={styles.listContainer}>
            {this.state.news.map((item, index) => (
              <ListImageSmall
                key={index}
                image={{ uri: item.image }}
                title={item.title}
                postDate={item.post_date}
                onPress={() =>
                  this.props.navigation.navigate("ArticleDetail", {
                    NewsID: item.id
                  })
                }
              />
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
}

ArticleList.navigationOptions = () => ({
  header: null
});

const styles = StyleSheet.create({
  page: {
    padding: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginVertical: 12
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    marginVertical: 10
  }
});
