/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Images
} from 'react-native';

const Main: () => React$Node = () => {
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.name}>Header</Text>
      </View>
      <View style={styles.topHalf}>
        <View style={styles.pictures}/>
        <Text style={[styles.name, {
        backgroundColor: '#ae8234',}]}>Hello World</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.buttons, {backgroundColor: "#ba7d71"}]}>
          <Text style={styles.name}>Left Button</Text>
        </View>
        <View style={[styles.buttons, {backgroundColor: "#509bc7"}]}>
          <Text style={styles.name}>Right Button</Text>
        </View>
      </View>
      <View style={styles.sparator}></View>
      <View style={styles.bottomHalf}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.pictures}/>
          <View style={styles.pictures}/>
          <View style={styles.pictures}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.pictures}/>
          <View style={styles.pictures}/>
          <View style={styles.pictures}/>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.name}>Bottom Navigation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHalf: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pictures: {
    backgroundColor: '#ae8234',
    width: 100,
    height: 100,
    marginRight: 8,
    marginLeft: 8,
  },
  header: {
    backgroundColor: '#15576b',
    height: 25,
    width: '100%',
  },
  name: {
    height: 25,
    justifyContent: 'center',
    marginBottom: 25,
    alignSelf: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    paddingHorizontal: 20,
  },
  buttons: {
    height: 78,
    flex: 1,
    alignSelf: 'center'
  },
  sparator: {
    backgroundColor: '#15576b',
    height: 13,
  },
  bottomHalf: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#509bc7',
    height: 60,
  },
});
export default Main;
