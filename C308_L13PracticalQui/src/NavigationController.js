import React, {useState, useEffect} from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text, 
    Icon
} from 'native-base';
import {
    Image, 
    View, 
    StyleSheet,
    Button,
    TouchableHighlight
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ListScreen from './ListScreen';

const NavigationController: () => React$Node = () => {
    const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Covid 19 Country Data' component={MainScreen} 
              options={({ navigation, route }) => ({
                headerRight: ({}) => (
                    <TouchableHighlight style={{marginRight: 15}} onPress={() => {
                      navigation.navigate("All Country Data")
                    }}>
                        <Icon name="list-alt" type="FontAwesome" style={{color: 'red'}}/>
                    </TouchableHighlight>
                )
              })}/>
              <Stack.Screen name='All Country Data' component={ListScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default NavigationController;