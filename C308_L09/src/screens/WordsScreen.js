import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Words = ({route, navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerWords}>{route.params.language}</Text>
      </View>
      <FlatList data={route.params.words} renderItem={({item}) => (
        <View style={styles.section}>
          <Text>{item}</Text>
        </View>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#bb86fc",
    alignItems: 'center',
    justifyContent: 'center'
  }, headerWords: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  }, section: {
    borderBottomWidth: 1,
    borderBottomColor: "#6200ee",
    padding: 10
  }
});

export default Words;
