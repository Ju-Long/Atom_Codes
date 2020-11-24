import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles2 = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black'
  },
  boxText: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    fontWeight: 'bold'
  }
});

const Activity2 = () => {
  return (
    <View>
      <Text style={[styles2.greenBox, styles2.boxText, styles2.title]}>Who We Are</Text>
      <Text style={[styles2.greenBox, styles2.boxText]}>Our People</Text>
      <Text style={[styles2.greenBox, styles2.boxText]}>Our Campus</Text>
    </View>
  );
};

export default Activity2;
