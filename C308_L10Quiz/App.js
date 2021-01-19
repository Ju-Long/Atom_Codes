import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import Display from './src/MyMusicApp.js';

const App: () => React$Node = () => {
  return (
    <View style={styles.show}><Display/></View>
  );
};

const styles = StyleSheet.create({
  show: {
    width: "100%",
    height: "100%",
    paddingTop: 50
  }
})

export default App;
