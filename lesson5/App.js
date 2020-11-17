import React from 'react';
import {MovieList} from './Movie.js';
// import {Boats} from './Boats.js';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercise</Text>
      <MovieList/>
    </ScrollView>
    );
};

export default App;
