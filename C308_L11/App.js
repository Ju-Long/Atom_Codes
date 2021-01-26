import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Activity from './src/Activity.js';
import Exercises from './src/Exercises.js';
import Challenge from './src/challenge.js';

const App: () => React$Node = () => {
  return (<View style={styles.display}>
    <Exercises/>
  </View>
  );
};

const styles = StyleSheet.create({
   display: {
      width: "100%",
      height: "100%",
      marginTop: 50
   }
});

export default App;
