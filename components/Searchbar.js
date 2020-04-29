import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

export default class Searchbar extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.searchbar}>
        <SearchBar
        lightTheme
        inputStyle={{backgroundColor: 'rgb(172, 187, 197)', color: 'white'}}
          clearIcon
          round
          containerStyle={{backgroundColor: 'white'}}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          placeholderTextColor='rgb(100, 103, 105)'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "#fff",
    marginVertical: 30
  },
});
