import React from 'react';
import {StyleSheet, View} from 'react-native';
import Worksheet from './src/Worksheet.js';
import PhonesyApp from './src/PhonesyApp.js';
import Challenge from './src/Challenge.js';

const App: () => React$Node = () => {
  return (
    <View>
    <Challenge/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
