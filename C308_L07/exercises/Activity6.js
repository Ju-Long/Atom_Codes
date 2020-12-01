import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity6: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'mediumaquamarine'}]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'crimson'}]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  child: {
    width: 80,
    height: 80,
  },
});

export default Activity6;
