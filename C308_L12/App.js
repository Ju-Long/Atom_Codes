import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Worksheet from './src/Worksheet.js';
import MainScreen from './src/mainScreen.js';

import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <View style={styles.display}><MainScreen/></View>
  );
};

const styles = StyleSheet.create({
  display: {
    width: '100%',
    height: '100%',
  }
});

export default App;
