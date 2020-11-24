import React from 'react';
import {
  View, Button
} from 'react-native';

const Activity4 = () => {
  return (
    <View>
    <Button title='Confirm' color='blue' onPress={() => {
      alert("Hi There");
    }}/>
    </View>
  );
};

export default Activity4;
