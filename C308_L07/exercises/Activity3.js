import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity3: () => React$Node = () => {
  return (
    <View style={[styles.parent, {flexDirection: 'column'}]}>
      <Text style={[styles.child, {maxWidth: 90, backgroundColor: 'powderblue'}]}>
        Child One
      </Text>
      <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
        Child Two
      </Text>
      <Text
        style={[styles.child, {maxHeight: 120, backgroundColor: 'steelblue'}]}>
        Child Three
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    flex: 1,
  },
  child: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Activity3;
