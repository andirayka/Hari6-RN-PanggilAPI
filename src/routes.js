import { createStackNavigator, createAppContainer } from "react-navigation";
import ArticleList from "./pages/ArticleList.js";
import ArticleDetail from "./pages/ArticleDetail.js";

const AppNavigator = createStackNavigator({
  ArticleList: {
    screen: ArticleList
  },
  ArticleDetail: {
    screen: ArticleDetail
  }
});

export default createAppContainer(AppNavigator);
