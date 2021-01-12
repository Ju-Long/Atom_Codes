import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (<View>
    <Text>
      Home Screen
    </Text>
    <Button title={"go to profile screen"}
    onPress={() => navigation.navigate("Profile", {username: "Random_user", words: ["Hello", "i", "come", "in", "peace"]})}/>
  </View>)
};

export default Home;
