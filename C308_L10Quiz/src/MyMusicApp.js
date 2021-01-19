import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import LogoScreen from './screens/SplashScreen.js';
import ListScreen from './screens/MusicListScreen.js';

const Stack = createStackNavigator();

const MyMusicApp = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='My Music' component={LogoScreen}/>
          <Stack.Screen name='My Music List' component={ListScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyMusicApp;
