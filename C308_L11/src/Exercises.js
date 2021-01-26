import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const Exercises: () => React$Node = () => {
  const [idolList, setIodlList] = useState([]);
  useEffect(() => {
    fetch('https://mysafeinfo.com/api/data?list=usamericanidol&format=json&case=default').then((response) => response.json()).then((json) => {
      setIodlList(json);
    })
    .catch((error) => console.error(error))
  }, []);
  return (<View>
    <Text style={styles.title}>American Idol Winner</Text>
    <FlatList data={idolList} renderItem={({item}) => (
      <View style={styles.seasons}>
        <View style={styles.headerView}>
            <Text style={styles.header}>Season {item.Season}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.name}>{item.WinnerName}</Text>
          <View>
            <Text style={styles.info}>Age: {item.Age}</Text>
            <Text style={styles.info}>HomeTown: {item.Hometown}</Text>
          </View>
        </View>
      </View>)}/>
  </View>);
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#00186d',
    width: '100%',
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }, seasons: {
    margin: 10,
    borderWidth: 4,
    borderColor: '#00186d',
    borderRadius: 10
  }, headerView: {
    alignSelf: 'center',
    width: '95%',
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderBottomColor: '#06c7ff'
  }, header: {
    textAlign: 'center',
    color: '#0349c1',
    fontSize: 20,
  }, body: {
    padding: 10,
  }, name: {
    color: '#00186d',
    fontSize: 20,
    paddingBottom: 7,
  }, info: {
    color: '#00186d',
    fontSize: 15
  }
});

export default Exercises;
