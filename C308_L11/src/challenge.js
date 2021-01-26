/* @flow */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Challenge: () => React$Node = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Singapore,sg&units=metric&APPID=bbeb34ebf60ad50f7893e7440a1e2b0b')
    .then((response) => response.json()).then((json) => {
      setWeatherInfo(json);
    })
    .catch((error) => console.error(error))
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 15}}>Current Weather for</Text>
        <View style={styles.name}><Text>{weatherInfo.name}</Text></View>
        <Text style={styles.text}>{weatherInfo.weather[0].main}</Text>
        <Text style={styles.text}>{weatherInfo.weather[0].description}</Text>
        <Text style={[{fontSize: 15}, styles.text]}>{weatherInfo.main.temp}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "cyan"
  }, name: {
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  }, text: {
    textAlign: 'center'
  }
});

export default Challenge;
