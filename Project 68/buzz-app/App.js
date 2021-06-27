import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FaceBook from "./screens/FaceBook";
import Instagram from "./screens/Instagram";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}
const tabNavigation = createBottomTabNavigator({
  FaceBook: FaceBook,
  Instagram: Instagram
})
const AppContainer = createAppContainer(tabNavigation)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
