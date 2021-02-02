import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App: () => React$Node = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(responseJson => {
      var data = [];
      responseJson.forEach(i => {
        if(i.userId == 1) {
          data.push(i);
        }
      });
      setUserData(data);
      console.log(userData);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  return (
    <View style={styles.main}>
      <FlatList data={userData} renderItem={({item}) => (
        <View style={styles.list}>
          <Text style={styles.listText}>Title: {item.title}</Text>
          <Text style={styles.listText}>Body: {item.body}</Text>
        </View>
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%'
  }, list: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    borderWidth: 2
  }, listText: {
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    color: 'black'
  }
});

export default App;
