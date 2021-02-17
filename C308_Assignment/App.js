import React, {useState} from 'react';
import {
  StyleSheet, TextInput, View, Button
} from 'react-native';


const App: () => React$Node = () => {
  const [date, setDate] = useState("")
  const [aqi, setAqi] = useState("")
  const [data, setData] = useState()
  return (
    <View style={styles.main}>
      <TextInput placeholder="Date" onChangeText={(text) => setDate(text)} style={styles.textinputs}/>
      <TextInput placeholder="AQI"  onChangeText={(text) => setAqi(text)} style={styles.textinputs}/>
      <View>
        <Button title="add new aqi" onPress={() => {
          setData(data.push([date, aqi]));
          console.log(data);
        }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    paddingTop: 50
  }, 
  textinputs: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    padding: 10
  }
});

export default App;
