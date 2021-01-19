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

const AddExpenseScreen = ({navigation}) => {
   const [amount, setAmount] = useState('Enter Amount');
   const [description, setDescription] = useState('Enter Description');
   const [category, setCategory] = useState('entertainment');

   var views = [];
   for (var i = 0; i < 9; i++) {
      views.push(<View></View>)
   }
   return (<View style={styles.overview}>
      <TextInput style={styles.inputBox} onChangeText={text => setAmount(text)} placeholder={amount}/>
      <TextInput style={styles.inputBox} onChangeText={text => setDescription(text)} placeholder={description}/>
      <Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
         <Picker.item label="Entertainment" value="entertainment"/>
         <Picker.item label="Food" value="food"/>
         <Picker.item label="Transport" value="transport"/>
      </Picker>
      <View style={styles.buttons}>
         <TouchableHighlight onPress={() => navigation.navigate('View Expense', {
               amount: {amount},
               description: {description},
               category: {category}})}>
            <View style={styles.button}>
               <Image source={require('../images/expense_icon.png')}/>
               <Text>Add Expense</Text>
            </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => Alert.alert("Tips: Track Your Spending!")}>
            <View style={styles.button}>
               <Image source={require('../images/info_icon.png')}/>
            </View>
         </TouchableHighlight>
      </View>
      {views}
   </View>);
};

const styles = StyleSheet.create({
   overview: {
      padding: 20,
      justifyContent: 'space-around',
      height: "100%"
   },
   inputBox: {
      height: 40,
      borderColor: '#86B2CA',
      borderWidth: 2,
      borderRadius: 17,
      padding: 5
   },
   buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around'
   },
   button: {
      flexDirection: 'row',
      backgroundColor: "#86B2CA",
      borderRadius: 20,
      padding: 15,
      alignItems: 'center'
   }
});

export default AddExpenseScreen;
