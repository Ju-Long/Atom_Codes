import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground
} from 'react-native';

const styles3 = StyleSheet.create({
  boxStyle: {
    width: 150,
    height: 150,
    padding: 20,
    backgroundColor: '#00629e'
  }
});

const Activity3 = () => {
  return (
    <View>
    <ImageBackground
      source={require('./images/flames_bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={[styles3.boxStyle]}>
    <Button title='Press me' color='#f9769a' onPress={() => {
      alert("you tapped the button");
    }}/>
    </View>
    </ImageBackground>
    </View>
  );
};

export default Activity3;
