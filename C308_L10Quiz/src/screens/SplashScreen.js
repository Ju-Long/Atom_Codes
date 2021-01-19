import React from 'react';
import {StyleSheet, Image, TouchableHighlight, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (<TouchableHighlight style={styles.display} onPress={() => navigation.navigate('My Music List')}>
    <Image source={require('../img/Background.png')}/>
  </TouchableHighlight>);
};

const styles = StyleSheet.create({
  display: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SplashScreen;
