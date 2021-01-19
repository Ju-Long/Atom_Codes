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
import {Picker} from '@react-native-picker/picker';

const Worksheet: () => React$Node = () => {
   const [name, onChangeText] = useState(' ');
   const [year, onChangeSelect] = useState('Year 1');
   return (<View style={styles.wall}>
      <Text>Year of Studying</Text>
      <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} placeholder={"Enter Name"}/>
      <Picker selectedValue={year} onValueChange={(itemValue, itemIndex) => onChangeSelect(itemValue)}>
         <Picker.item label="Year 1" value="Year 1"/>
         <Picker.item label="Year 2" value="Year 2"/>
         <Picker.item label="Year 3" value="Year 3"/>
      </Picker>

      <Text>My name is {name}</Text>
      <Text>I am in {year}</Text>

      <TouchableHighlight>
         <View style={styles.button}>
            <Image source={require('./images/tick.png')}/>
            <Text>Confirm</Text>
         </View>
      </TouchableHighlight>
   </View>)
};
const styles = StyleSheet.create({
   inputBox: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
   },
   button: {
      width: "100%",
      backgroundColor: "lightgreen",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5
   }
});

export default Worksheet;
