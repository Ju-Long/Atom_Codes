import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList, 
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';

const App: () => React$Node = () => {
  const [users, setUsers] = useState();
    useEffect(() => {
      fetch('https://randomuser.me/api/?inc=name,picture,phone,id&results=12')
    .then(response => response.json())
    .then(responseJson => {
      setUsers(responseJson.results);
      console.log(users);
    })
    }, []);
  return (
    <View>
      <FlatList data={users} renderItem={({item}) => (
        <View style={styles.list}>
          <Image source={{uri: item.picture.large}} style={styles.thumbnail}/>
          <Text>{item.name.first} {item.name.last}</Text>
          <TouchableHighlight onPress={() => {
            Alert.alert("", item.phone)
            console.log("Hello");
          }}>
          <Image source={require('./image/phone.png')} style={styles.image}/>
          </TouchableHighlight>
        </View>
      )
      }/>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, image: {
    width: 50,
    height: 50
  }, thumbnail: {
    width: 50,
    height: 50
  }
});

export default App;
