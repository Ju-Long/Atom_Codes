import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

const Worksheet: () => React$Node = () => {
  const [name, setName] = useState();
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();
  return (<View>
    <TextInput style={styles.textinput} placeholder="Name" onChangeText={text => setName(text)}/>
    <TextInput style={styles.textinput} placeholder="Salary"/>
    <TextInput style={styles.textinput} placeholder="Age"/>
    <View style={styles.button}><Button title="Hello" onPress={() => {
      fetch('http://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: {name},
          salary: {salary},
          age: {age}
        }),
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
    }}/></View>
  </View>);
};

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }, button: {
    width: '100%',
    backgroundColor: "gray"
  }
});

export default Worksheet;
