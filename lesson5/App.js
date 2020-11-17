import React from 'react';
import {MovieList} from './Movie.js';
import {
  View,
  Text,
  Image
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View>
      <Text>Lesson 05 Exercise</Text>
      <MovieList/>
    </View>
    );
};

export default App;
