import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ImageBackground} from 'react-native';

const ValistApp: () => React$Node = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <ImageBackground style={styles.main} source={require('../image/image.jpg')}>
          <Text style={styles.header}>Registration</Text>
          <TextInput style={styles.textinput} placeholder="Username" onChangeText={text => setUsername(text)}/>
          <TextInput style={styles.textinput} placeholder="Email" onChangeText={text => setEmail(text)}/>
          <TextInput style={styles.textinput} placeholder="Phone Number" onChangeText={text => setPhone(text)}/>
          <View style={styles.button}><Button title='Sign Up' color='white' onPress={() => {

          }}/></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }, header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white'
  }, textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '85%',
    marginBottom: 20,
    borderRadius: 5,
    borderBottomWidth: 3,
    borderBottomColor: 'pink',
    backgroundColor: 'white'
  }, button: {
    width: '85%',
    backgroundColor: 'pink',
    borderRadius: 5,
    height: 40
  }
});

export default ValistApp;
