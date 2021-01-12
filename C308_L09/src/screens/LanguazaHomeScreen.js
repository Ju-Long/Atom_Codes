import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import Words from './WordsScreen.js'

const LANG_DATA = [
  {
    language: 'French',
    words: ['Bonjour', 'Amour', 'Bonheur', 'Chat'],
  },
  {
    language: 'German',
    words: ['Ja', 'Nein', 'Danke', 'Bitte'],
  },
];

const Home = ({navigation}) => {
  return <FlatList data={LANG_DATA} renderItem={({item}) => (
    <View style={styles.section}>
      <Text>{item.language}</Text>
      <View style={styles.button}>
        <Button
        title={'view words'} color={"#bb86fc"}
        onPress={() => navigation.navigate('Words', {language: item.language, words: item.words})}/>
      </View>
    </View>
  )}/>
};

const styles = StyleSheet.create({
  /* TODO: Insert style objects here */
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    alignItems: 'center'
  }, button: {
    width: 200
  }
});

export default Home;
