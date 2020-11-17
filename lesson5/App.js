import React from 'react';
import {MovieList} from './Movie.js';
import {BoatsList} from './Boats.js';
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
      <Text>Get A Boat - For Sale</Text>
      <BoatsList/>
    </ScrollView>
    );
};

export default App;
