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
      <Text style={styles.text}>Amount: {route.params.amount}</Text>
      <Text style={styles.text}>Description: {route.params.description}</Text>
      <Text style={styles.text}>Category: {route.params.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   text: {
      marginVertical: 30
   }
});

export default ViewExpenseScreen;
