import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default class FaceBook extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
      <Text> FaceBook </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  }
})