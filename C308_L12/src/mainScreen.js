import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ValistApp from '../src/ValistApp.js';
import Welcome from '../src/welcomeScreen.js';

const Stack = createStackNavigator();

const mainScreen: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Register' component={ValistApp} />
        <Stack.Screen name='Welcome' component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default mainScreen;
