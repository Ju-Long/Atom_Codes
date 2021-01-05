import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const datasource = [
  {
    key: 'a'
  }, {
    key: 'b'
  }, {
    key: 'c'
  }, {
    key: 'd'
  }, {
    key: 'e'
  }, {
    key: 'f'
  }, {
    key: 'g'
  }, {
    key: 'h'
  }, {
    key: 'i'
  }, {
    key: 'j'
  }, {
    key: 'k'
  }, {
    key: 'l'
  }, {
    key: 'm'
  }, {
    key: 'n'
  }, {
    key: 'o'
  }, {
    key: 'p'
  }
];

// INSERT renderItem functional component CODE HERE

const Worksheet: () => React$Node = () => {
  return (<View>
    <FlatList data={datasource} renderItem={renderItem} style={styles.words}/>
  </View>);
};

const styles = StyleSheet.create({
  words: {
    margin: 10,
    fontSize: 20
  }
});

const renderItem = ({item}) => {
  return <Text>{item.key}</Text>
};

export default Worksheet;
