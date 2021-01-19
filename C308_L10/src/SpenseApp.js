import React, {useState} from 'react';
import {
   StyleSheet,
   TextInput,
   View,
   Text,
   TouchableHighlight,
   TouchableOpacity,
   Image
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import Add from './screens/AddExpenseScreen.js';
import Display from './screens/ViewExpenseScreen.js';

const Stack = createStackNavigator();

const SpenseApp: () => React$Node = () => {
   return (<NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name='Add Expense' component={Add}/>
         <Stack.Screen name='View Expense' component={Display}/>
      </Stack.Navigator>
   </NavigationContainer>);
};

export default SpenseApp;
