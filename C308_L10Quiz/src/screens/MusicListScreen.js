import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

const MusicListScreen = () => {
  return (<View>
    <Image source={require('../img/Background.png')} style={styles.images}/>
    <View style={styles.views}>
      <Text>Music</Text>
      <Text>Artist</Text>
      <Text>Album</Text>
    </View>
    <FlatList data={MUSIC_DATA} renderItem={({item}) => (<View style={styles.views}>
        <Text>{item.name}</Text>
        <Text>{item.artist}</Text>
        <Text>{item.album}</Text>
      </View>)}/>
  </View>);
};

const styles = StyleSheet.create({
  images: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  views: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});

const MUSIC_DATA = [
  {
    name: "Pretty Stranger",
    artist: "Prismo",
    album: "Pretty Stranger"
  }, {
    name: "Play Me Like A Violin",
    artist: "Stephen",
    album: "Play Me Like A Violin"
  }, {
    name: "Runaway",
    artist: "Felix Cartal",
    album: "Runaway"
  }
];

export default MusicListScreen;
