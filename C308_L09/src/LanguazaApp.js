import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/LanguazaHomeScreen.js';
import Words from './screens/WordsScreen.js';

const Stack = createStackNavigator();

const LanguazaApp: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LanguazaApp - Home' component={Home} options={{headerStyle: {backgroundColor: "#6200ee"}, headerTintColor: '#fff'}}/>
        <Stack.Screen name='Words' component={Words} options={{headerStyle: {backgroundColor: "#6200ee"}, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LanguazaApp;
