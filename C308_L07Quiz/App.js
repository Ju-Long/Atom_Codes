import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import CustomBtn from './CustomButton.js';

const USER_DATA = {
  name: 'Jane Doe',
  occupation: 'React Native Developer',
  description: 'I use JavaScript to build mobile applications for iOS and Android',
};

const App: () => React$Node = () => {
  return (
    <View>
    <ImageBackground style={[styles.imgBackground]} source={require('./img/phonebackground1.jpg')}>
      <View style={[styles.section]}>
        <Image source={require('./img/myself.jpg')} style={[styles.avatar]}/>
        <Text style={[styles.avatarName]}>{USER_DATA.name}</Text>
      </View>
      <View style={[styles.section]}>
        <CustomBtn title="occupation" data={USER_DATA.occupation}/>
        <CustomBtn title="description" data={USER_DATA.description}/>
      </View>
      <View style={[styles.section]}></View>
      <View style={[styles.section]}></View>
    </ImageBackground>
  </View>);
};

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
    flexDirection: 'column',
  },
  section: {
    width: "100%",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 20,
  },
  avatarName: {
    color: "white",
    fontSize: 17,
  },
});

export default App;
