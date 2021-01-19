import React, {useState} from 'react';
import {
   StyleSheet,
   TextInput,
   View,
   Text,
   Image,
   TouchableHighlight,
   TouchableOpacity,
   Alert
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const ViewExpenseScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>Amount: {route.params}</Text>
      <Text>Description: </Text>
      <Text>Category: </Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ViewExpenseScreen;
