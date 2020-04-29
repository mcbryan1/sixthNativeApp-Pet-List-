import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Searchbar from './components/Searchbar'
import Petpage from './Petpage'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Searchbar/>
        <Petpage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    backgroundColor: 'rgba(251, 252, 253, 0.774)'
  },
});
