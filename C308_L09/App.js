import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import Worksheet from './src/Worksheet.js';
import LanguazaApp from './src/LanguazaApp.js'

const App: () => React$Node = () => {
  return <LanguazaApp/>
};

const styles = StyleSheet.create({

});

export default App;
