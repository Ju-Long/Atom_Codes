import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  return <View>
    <Text>This is {route.params.username} Profile Page</Text>
    <FlatList data={route.params.words} renderItem={({item}) => (
      <Text>{item}</Text>
    )}/>
  </View>;
};

export default ProfileScreen;
