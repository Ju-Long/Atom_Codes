import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import Worksheet from './src/Worksheet.js';
import SpenseApp from './src/SpenseApp.js';

const App: () => React$Node = () => {
   return <View style={styles.display}>
      {/* <Worksheet/> */}
      <SpenseApp/>
   </View>;
};

const styles = StyleSheet.create({
   display: {
      width: "100%",
      height: "100%",
      paddingVertical: 50
   }
});

export default App;
